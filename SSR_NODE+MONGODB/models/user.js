const {
    Schema,
    model
} = require('mongoose');

const userSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    name: String,
    password: {
        required: true,
        type: String
    },
    cart: {
        items: [{
            count: {
                default: 1,
                required: true,
                type: Number
            },
            petCardId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'PetCard'
            }
        }]
    }
})

userSchema.methods.addToCart = function (petCard) {
    const clonedItems = [...this.cart.items];
    const idx = clonedItems.findIndex(
        el => el.petCardId.toString() === petCard._id.toString());

    if (idx >= 0) {
        clonedItems[idx].count++;
    } else {
        clonedItems.push({
            count: 1,
            petCardId: petCard._id
        });
    }
    this.cart.items = clonedItems;
    return this.save();
}

userSchema.methods.removeFromCart = function(id) {
    let cloneItems = [...this.cart.items];
    const idx = cloneItems.findIndex(
        (el) => {
        return el.petCardId.toString() === id.toString()
    });

    if (cloneItems[idx].count === 1) {
        cloneItems = cloneItems.filter(
            (el) => {
               return el.petCardId.toString() !== id.toString()});
    } else {
        cloneItems[idx].count--
    }
    this.cart.items = cloneItems;
    return this.save();
}

userSchema.methods.clearCart = function() {
    this.cart.items = [];
    return this.save();
}

module.exports = model('User', userSchema);