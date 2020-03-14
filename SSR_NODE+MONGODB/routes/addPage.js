const {
    Router
} = require('express');
const PetCard = require('../models/petCard');
const auth = require('../middleware/auth');
const router = Router();

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'Add pet card page',
        isAddPage: true
    });
})

router.post('/', auth, async (req, res) => {
    const petCards = new PetCard({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    });
    
    try {
        await petCards.save()
        res.redirect('/petCards');
    }
    catch(e) {
        console.log(e)
    }
})

module.exports = router;