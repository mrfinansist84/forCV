const {
    Router
} = require('express');
const PetCard = require('../models/petCard');
const auth = require('../middleware/auth');
const router = Router();

router.get('/', async (req, res) => {
    const petCards = await PetCard.find();
    res.render('petCards', {
        title: 'Pet Card page',
        isPetCards: true,
        petCards
    });
})

router.get('/:id', async (req, res) => {
    const petCard = await PetCard.findById(req.params.id);
    res.render('petCard', {
        title: `PetCard ${petCard.title}`,
        petCard
    })
})

router.get('/:id/edit', auth, async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/');
    }
    const petCard = await PetCard.findById(req.params.id);
    res.render('petCard-edit', {
        title: `PetCard ${petCard.title}`,
        petCard
    })
})

router.post('/remove', auth, async (req, res) => {
    try {
        await PetCard.deleteOne({
            _id: req.body.id
        });
        res.redirect('/petCards');
    } catch (e) {
        console.log(e);
    }
})

router.post('/edit', auth, async (req, res) => {
    const {
        id
    } = req.body;
    delete req.body.id;
    await PetCard.findByIdAndUpdate(id, req.body);
    res.redirect('/petCards');
})

module.exports = router;