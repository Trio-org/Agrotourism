import Farm from "../models/farm.model.js";

export const farmcreation=async(req,res)=>{

   
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        const user=req.body.curruser.id
        const {name, description, location, packages } = req.body;

        try {
            console.log(user)
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