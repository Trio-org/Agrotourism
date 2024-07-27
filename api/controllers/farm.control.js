import Farm from "../models/farm.model.js";

export const farmcreation=async(req,res)=>{

   
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        const user=req.body.curruser.id
        const {name, description, location, packages } = req.body;

        try {
            // console.log(user)
            const newFarm = new Farm({
                name,
                description,
                location,
                packages,
                owner: user
            });

            const farm = await newFarm.save();
            res.json(farm);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
  



}
export const updatefarm=async(req,res,next)=>{
    try {
        const farm=await Farm.findById(req.params.id)
        if(!farm) return res.status(400).json({msg:"farm not exist"})
        if(req.body.curruser.id !== farm.owner.toString()) return res.status(400).json({msg:"you can only update your farm"})
        const {name, description,images, location, packages } = req.body;
        const updatedfarm=await Farm.findByIdAndUpdate(req.params.id,{$set:{
            name,
            description,
            images,
            packages,
            location
        }},{new:true})
        res.status(200).json({msg:"farm updated"})

    } catch (err) {
        console.log(err.message)
        res.status(500).send("server error")
    }

}

export const farmdelete=async(req,res,next)=>{
    try {
        const farm=await Farm.findById(req.params.id)
        if(!farm) return res.status(400).json({msg:"farm not exist"})
        if(req.body.curruser.id !== farm.owner.toString()) return res.status(400).json({msg:"you can only update your farm"})
        await Farm.findByIdAndUpdate(req.params.id)
        res.status(200).json({msg:"farm deleted"})
    } catch (err) {
        console.log(err.message)
        res.status(500).send("server error")
    }
}