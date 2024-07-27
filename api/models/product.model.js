import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerprice:{type:Number},
    images: {type:Array,required:true},
    category:{ type: String, enum: ['organic', 'inorganic'],default:'organic',required:true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);
export default Product
