import Product from "../models/product.model.js";

export const productcreation=async(req,res,next)=>{
    const user=req.body.curruser.id
    const {name, description, price,offerprice, images } = req.body;

    try {
        console.log(user)
        const newProduct = new Product({
            name,
            description,
            price,
            offerprice,
            images,
            owner: user
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}