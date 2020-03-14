const {
    Router
} = require('express');
const Order = require('../models/order');
const auth = require('../middleware/auth');
const router = Router();

router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({
                'user.userId': req.user._id
            })
            .populate('user.userId');

        await res.render('orders', {
            isOrders: true,
            title: 'Orders',
            orders: orders.map(el => {
                return {
                    ...el._doc,
                    price: el.petCards.reduce((total, petCard) => {
                        return total += petCard.petCard.price * petCard.count
                    }, 0)
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const user = await req.user
            .populate('cart.items.petCardId')
            .execPopulate()

        const petCards = user.cart.items.map(el => ({
            petCard: {
                ...el.petCardId._doc
            },
            count: el.count
        }))

        const order = new Order({
            user: {
                name: req.user.name,
                userId: req.user
            },
            petCards
        })
        await order.save();
        await req.user.clearCart();

        res.redirect('/orders');
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;