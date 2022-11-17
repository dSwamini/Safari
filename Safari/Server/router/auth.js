const jwt = require('jsonwebtoken');
const express = require('express');
const cookieParser = require('cookie-parser')
const router = express.Router();
router.use(cookieParser());
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

//1.
const {Jwt_secret} = require("../keys")
//

//
const { body, validationResult } = require('express-validator');
const EventItems = require('../model/eventSchema.js');
//


require('../db/conn');
const User = require('../model/userSchema');
const requireLogin = require('../middleware/requireLogin');

router.use(cookieParser())

router.get('/', (req,res) => {
    res.send('Homepage router');
});


router.post('/register', async (req,res)=>{

    const { name,email,password,cpassword } = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error : "plz fill again"});
    }

    try{
        let token;
        const userExist = await User.findOne({ email: email })

        if(userExist){
            return res.status(422).json({error : "email already registered"});
        }else if (password != cpassword){
            return res.status(422).json({error : "password not matching with confirm password"});
        }else{
            const user = new User({name,email,password,cpassword});

            await user.save();
            
            
            res.status(201).json({message:"user registered successfully"});
        }


    } catch(err){
        console.log(err);
    }

    
});

// login route
router.post('/signin', async (req,res)=>{
    //console.log(req.body);
    //res.json({message:"awesome"});

    try{

        const {email, password} = req.body;
        if(!email ||  !password){
            return res.status(400).json({error : "Invalid credentials"});
        }

        // const userLogin = await User.findOne({email:email});
        const userLogin = await User.findOne({email:email}).select("+password");

        console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token =  await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000000),
                // expires: 10s,
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"});
            }else{
                // res.json({message:"User signed in successfully"});
                const token = jwt.sign({ _id: userLogin.id }, Jwt_secret)
                res.json(token)
                // console.log( token)
            }
        }else{
            res.status(400).json({ error: "User not found" });
           
        }


        

    }catch(err){
        console.log(err);
    }

})

// wishlist page
router.get('/wishlist',authenticate, (req,res) => {
    console.log("hello wishlist");
   res.send(req.rootUser);
});



// logout 
router.get('/logout',(req,res) => {
    console.log("hello Logout");
    res.clearCookie('jwtoken' , {path:'/'});
    res.status(200).send("User Logout");
});

//

// ROUTE 2: Add TherapyItem using - POST "/api/EventItems/addtherapyitem"
router.post('/addevent', [
    body('eventName', 'Enter a valid description').isLength({ min: 1 }),
    body('eventDesc', 'Enter a valid description').isLength({ min: 1 }),
    body('mainImageURL', 'Enter a valid description').isLength({ min: 1 }),
    body('location', 'Enter a valid description').isLength({ min: 1 }),
    body('date', 'Enter a valid description').isLength({ min: 1 }),
    body('duration', 'Enter a valid description').isLength({ min: 1 }),
    body('cost', 'Enter a valid description').isLength({ min: 1 }),
    body('nearby_attracn', 'Enter a valid description: nearby_attracn').isLength({ min: 0 }), //nearby_attracn
    ],
    async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    succcess = false;
    return res.status(400).json({ success, errors: errors.array() });
    }
    try {
    let eventItem = await EventItems.findOne({ id: req.body.id });
    // if (eventItem) {
    // success = false;
    // return res.status(400).json({ success, error: "Sorry! Item with this id already exist" });
    // }
    eventItem = await EventItems.create({
    id: req.body.id,
    eventName: req.body.eventName,
    eventDesc: req.body.eventDesc,
    mainImageURL: req.body.mainImageURL,
    location: req.body.location,
    date: req.body.date,
    duration: req.body.duration,
    cost: req.body.cost,
    nearby_attracn: req.body.nearby_attracn
    });
    success = true;
    res.json("New Event is successfully added!!");
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
    }
    }
    )
    
    // ROUTE 3: Edit the EventItems using - PUT "/api/EventItems/updatetherapyitem/:id"
    router.put('/updateeventitem/:id',
    async (req, res) => {
    const { id, eventName, eventDesc, mainImageURL, location, date, duration,
    cost, nearby_attracn } = req.body;
    try {
    const newItem = {};
    if (eventName) {
    newItem.eventName = eventName;
    }
    if (eventDesc) {
    newItem.eventDesc = eventDesc;
    }
    if (mainImageURL) {
    newItem.mainImageURL = mainImageURL;
    }
    if (location) {
    newItem.location = location;
    }
    if (date) {
    newItem.date = date;
    }
    if (duration) {
    newItem.duration = duration;
    }
    if (cost) {
    newItem.cost = cost;
    }
    if (nearby_attracn) {
    newItem.nearby_attracn = nearby_attracn;
    }
    //if (therapyOffer) {
    //newItem.therapyOffer = therapyOffer;
    //}
    //if (therapySession) {
    //newItem.therapySession = therapySession;
    //}
    
    let oldItem = await EventItems.findById(req.params.id);
    if (!oldItem) {
    res.status(404).send("Therapy not found");
    }
    oldItem = await EventItems.findByIdAndUpdate(req.params.id, { $set: newItem }, {
    new: true })
    res.json("New event item has been successfully updated!!");
    }
    catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
    }
    }
    )
    // ROUTE 4: Delete a TherapyItem using - DELETE "/api/EventItems/deletetherapyitem/:id"
    router.delete('/deleteeventitem/:id',
    async (req, res) => {
    try {
    let oldItem = await EventItems.findById(req.params.id);
    if (!oldItem) {
    res.status(404).send("Item not found");
    }
    oldItem = await EventItems.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Item has been deleted" });
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
    }
    }
    )
    

//

//Display posts
// router.get("/allposts", (req, res) => {
//     console.log('Hello All post')
//     POST.find()
//         .populate("postedBy","_id name")
//         .then(posts => res.json(posts))
//     .catch(err=>console.log(err))
// })


//

//create post

router.get("/community", requireLogin, (req, res) => {
    console.log("Auth")
})

//

module.exports = router;