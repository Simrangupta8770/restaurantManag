const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    
        
            name: {
                type: String,
                required: true
            },
            order: [
                {
                    item: {
                        type: String,
                        required: true
                    },
                    quantity: {
                        type: Number,
                        default :1,
                       
                    },
                    price: {
                        type: Number,
                        required: true
                    }
                }
            ],
            tot : {
                type: Number,
                required: true
            },
            createdAt: {
                type: Date,
                default : Date.now()
            },
    

});

module.exports = mongoose.model("Customer", customerSchema);
