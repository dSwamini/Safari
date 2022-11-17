const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const POST = mongoose.model("POST")

router.get("/allposts", (req, res) => {
    console.log('Hello All post')
    POST.find()
        .populate("postedBy","_id name")
        .then(posts => res.json(posts))
    .catch(err=>console.log(err))
})

router.post("/createPost",requireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log("PicURL:" + pic)
    if (!body || !pic) {
        return res.status(422).json({error: "please add all the fields"})
    }
    // res.json("ok")
    req.user
    console.log(req.user)
    const post = new POST({
        body,
        photo:pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({post:result})
    }).catch(err => console.log(err))
})

module.exports = router