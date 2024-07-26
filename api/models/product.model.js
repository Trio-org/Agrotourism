import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerprice:{type:Number},
    images: [String],
    farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm', required: true },
},{timestamps:true});

module.exports = mongoose.model('Product', productSchema);
