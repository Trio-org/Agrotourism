import mongoose  from "mongoose";

const ProductpurchaseSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity:{type:Number,required:true},
    // endDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
},{timestamps:true});

const ProductPurchase = mongoose.model('Productpurchase', ProductpurchaseSchema);
export default ProductPurchase
