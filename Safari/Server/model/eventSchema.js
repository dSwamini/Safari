const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    eventName: {
        type:String,
        required:true
    },
    eventDesc: {
        type:String,
        required:true
    },
    mainImageURL: {
        type:String,
        required: true,
        // select: false
    },
    location: {
        type:String,
        required: true,
        // select: false
    },
    date: {
        type:String,
        required: true,
        // select: false
    },
    duration: {
        type:String,
        required: true,
        // select: false
    },
    cost: {
        type:String,
        required: true,
        // select: false
    },
    nearby_attracn: {
        type:String,
        required: true
        // select: false
    }
    
})




const Event = mongoose.model('EVENT', eventSchema);
module.exports = Event;
