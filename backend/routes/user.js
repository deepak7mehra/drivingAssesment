const express = require("express");
const {User, UserProfile} = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require("../config");
const saltRounds = 10;



const router = express.Router();

const signupBody = zod.object({
    email:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
    street: zod.string(),
    city:zod.string(),
    state:zod.string(),
    postalcode:zod.string()

})

router.post("/signup", async (req,res)=>{

    try{

        const {success} = signupBody.safeParse(req.body);
    if (!success){
        return res.status(411).json({
            message : "Email already taken/Incorrect inputs"
        });
    }

    

    const existingUser = await User.findOne({
        email:req.body.email
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const hasedPass = await bcrypt.hash(req.body.password,saltRounds);

    const user = await User.create({
        email : req.body.email,
        password : hasedPass,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        address :{
            street : req.body.street,
            city : req.body.city,
            state : req.body.state,
            postalcode : req.body.postalcode
        }
    })

    const userId = user._id;


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token:token
    })

    }
    catch(err){
        console.log(err);
         return res.status(500).json({
            message:"internal error"
        })
    }
    
})


const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
})

router.post("/signin",async (req,res)=>{
    try{
        const {success} = signinBody.safeParse(req.body);

    if (!success) return res.json({message:"incorrect input"});
    

    

    

    const user = await User.findOne({
        email:req.body.email,
    });

   


    if (user){
        const {password} = user;
        const isSame = await bcrypt.compare(req.body.password,password);

        if (isSame){
            const token = jwt.sign({
                userId:user._id,
            },JWT_SECRET);
    
            return res.json({
                token:token
            })

        }

        return res.json({message:"Invalid username or password"})


        
    }
    return res.json({message : "Invalid username or password"})
    }
    catch(err){
        return res.json({message:"Internal error"})
    }
})




module.exports = router;