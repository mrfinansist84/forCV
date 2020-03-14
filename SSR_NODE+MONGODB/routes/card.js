const {
    Router
} = require('express');
const PetCard = require('../models/petCard');
const auth = require('../middleware/auth');
const router = Router();

const mapPetCard = (cart) => cart.items.map((el)=>({
      ...el.petCardId._doc, 
      id: el.petCardId.id,
      count: el.count
    }))
    
const computePrice = (petCards) => {
    return petCards.reduce((total, item)=> {
        return total += item.price * item.count
    }, 0)
}

router.post('/add', auth, async (req, res) => {
    const petCard = await PetCard.findById(req.body.id);
    await req.user.addToCart(petCard);
    res.redirect('/card');
})

router.get('/', auth, async (req, res) => {
    const user = await req.user
    .populate('cart.items.petCardId')
    .execPopulate()
  
  const petCards = mapPetCard(user.cart)
  
    res.render('card', {
      title: 'Cart',
      isCard: true,
      petCards: petCards,
      price: computePrice(petCards)
})
})

router.delete('/remove/:id', auth, async(req, res) => {
   await req.user.removeFromCart(req.params.id);
   const user = await req.user.populate('cart.items.petCardId').execPopulate();
   const petCards = mapPetCard(user.cart);
    const cart = {
        petCards, 
        price: computePrice(petCards)
    }
   res.status(200).json(cart);
})

module.exports = router