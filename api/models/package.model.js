import mongoose from "mongoose";
const packageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true }, // e.g., "3 days", "1 week"
});

module.exports = packageSchema;
