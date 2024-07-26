import mongoose  from "mongoose";

const ProductTransactionSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Productpurchase', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    paymentMethod: { type: String, required: true },
},{timestamps:true});

const ProductTransaction = mongoose.model('ProductTransaction', ProductTransactionSchema);
export default ProductTransaction