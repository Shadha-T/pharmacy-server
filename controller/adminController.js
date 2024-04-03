import Jwt from"jsonwebtoken"
import{Admin} from"../model/adminModel.js"



export const register =async (req, res) =>{

    try {
    
       

            const newAdmin = new Admin(req.body)

            const saveAdmin = await newAdmin.save();

            if (saveAdmin) {
                return res.status(201).json({ admin: saveAdmin, message: 'successfully inserted user into db' });
            }


       

    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const login = async (req, res) => {

   

    const getAdmin = await Admin.findOne({ email:req.body.email })

    if (!getAdmin) {
        return res.status(400).json({ message: 'invalid email' })
    }

    const isMatch = await Admin.findOne({ password:req.body.password })


    if (!isMatch) {
        return res.status(400).json({ message: 'invalid pwrd' })
    }


            const token = Jwt.sign({adminId: getAdmin._id,isAdmin:getAdmin.isAdmin},process.env.JWT_SECRET_KEY, {expiresIn:"10h"})


            return res.status(200).json({ admin: getAdmin, message: 'Successfull' ,token})
      
   

}


