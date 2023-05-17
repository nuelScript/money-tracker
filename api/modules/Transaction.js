const mongoose = require("mongoose");
const {Schema} = mongoose;

const definition = {    
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true}
};

const TransactionSchema = new Schema (definition);

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;