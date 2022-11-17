const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require("jsonwebtoken");
var cors = require('cors')

const app = express();
app.use(cors())

require('./db/conn');
const User = require('./model/userSchema');

dotenv.config({ path: './config.env' });

//
const { mongoUrl } = require("./keys");

//


const cookieparser = require('cookie-parser');
const Event = require('./model/eventSchema');

app.use(express.json());

app.use(require('./router/auth'));
app.use(cookieparser());

//const User = require('./model/userSchema');
const PORT = process.env.PORT;




// middleware

//const middleware = (req,res,next) => {
//    console.log("middleware");
//    next();
//}

app.get('/getalleventsbyid/:id', async (req,res) => {
    let id = req.params.id
    console.log(id)
    let event =await Event.find({_id:req.params.id});
    res.send(event);
});
// get all users //
app.get('/getallusers', async (req,res) => {
    let Allusers=await User.find();
    res.send(Allusers);
});







app.get('/', (req,res) => {
    res.send('Homepage');
});
app.get('/events', (req,res) => {
    res.send('Events Page');
});
app.get('/map', (req,res) => {
    res.send('Map');
});
//app.get('/wishlist',middleware, (req,res) => {
//    console.log("hello wishlist");
//    res.send('Wishlist');
//});
app.get('/community', (req,res) => {
    res.send('Community Page');
});
app.get('/explore', (req,res) => {
    res.send('Explore Page');
});
app.get('/login', (req,res) => {
    res.send('Log in');
});
app.get('/signup', (req,res) => {
    res.send('Sign Up');
});

app.get('/getevents', async (req, res) => {
    const events = await Event.find()
    res.send(events);
});

app.get('/getposts', async (req, res) => {
    const posts = await Event.find()
    res.send(posts);
});


// app.get('/fetchevent', (req,res) => {
//     res.send('fetch event');
// });
//
app.get('/addevent', (req,res) => {
    res.send('add event');
});
app.get('/updateeventitem/:id', (req,res) => {
    res.send('add event');
});
app.get('/deleteeventitem/:id', (req,res) => {
    res.send('delete event');
});
//

// app.get("/allposts", (req, res) => {
//     console.log('Hello All post')
//     POST.find()
//         .populate("postedBy","_id name")
//         .then(posts => res.json(posts))
//     .catch(err=>console.log(err))
// })


// app.get('/allposts', (req,res) => {
//     res.send('All post');
// });


/***************************************** */


app.listen(PORT, ()=>{
    console.log('server running');
})

require('./model/post')

app.use(require("./router/createPost"))