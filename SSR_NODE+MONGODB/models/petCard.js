const {
    Schema,
    model
} = require('mongoose');

const petCard = new Schema({
    title: {
        type: String,
        required: true
    },
    price: Number,
    image: String,
    description: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

petCard.method('toClient', function() {
const petCard = this.toObject();

petCard.id = petCard._id;
delete petCard._id

return petCard;
})

module.exports = model('PetCard', petCard)