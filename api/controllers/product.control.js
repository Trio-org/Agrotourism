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

export const updateproduct=async(req,res,next)=>{
    try{
    const product =await Product.findById(req.params.id)
    console.log(product.owner.toString())
    console.log(req.body.curruser.id)
    if(!product) return res.status(400).json({msg:"product not exist"})
    if(req.body.curruser.id !== product.owner.toString()) return res.status(400).json({msg:"you cannot edit others product"})
    const {name, description, price,offerprice, images } = req.body;
    const updatedproduct=await Product.findByIdAndUpdate(req.params.id,{$set:{
        name,
        description,
        price,
        offerprice,
        images
    }},{new:true})
    res.status(200).json(updatedproduct)}
    catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }


}