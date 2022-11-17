const jwt = require('jsonwebtoken')
const {Jwt_secret} = require("../keys")
const mongoose = require("mongoose")
const USER = mongoose.model("USER")

module.exports = (req, res, next) => {
    // console.log("middleware")
    const { authorization } = req.headers; //19:00
    if (!authorization) {
        return res.status(401).json({error: "Plz login"})
    }
    // res.json("ok")
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, Jwt_secret, (err, payload) => {
        if (err) {
            return res.status(401).json({
                error: "Please login"
            })
        }
        const { _id } = payload
        USER.findById(_id).then(userData => {
            req.user = userData
            next()
            // console.log(userData)
        })
    })
    // next()
}

//token