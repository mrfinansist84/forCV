const {
    Schema,
    model
} = require('mongoose');

const ordersSchema = new Schema({
    petCards: [{
        petCard: {
            type: Object,
            require: true
        },
        count: {
            type: Number,
            require: true
        }
    }],
    user: {
        name: String,
        userId: {
            require: true,
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Order', ordersSchema);