import mongoose from "mongoose";
const farmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price:{type:Number,required:true},
    images: [String],
    packages: [packageSchema],
    verification:{type:String,enum: ['Pending', 'Completed', 'Failed'], default: 'Pending'},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},{timestamps:true});

const Farm = mongoose.model('Farm', farmSchema);
export default Farm
