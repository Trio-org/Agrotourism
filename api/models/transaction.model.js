import mongoose  from "mongoose";

const transactionSchema = new mongoose.Schema({
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    paymentMethod: { type: String, required: true },
},{timestamps:true});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction
