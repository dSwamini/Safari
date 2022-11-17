const DB = process.env.DATABASE;
const mongoose = require('mongoose');
let connection = mongoose.connect('mongodb+srv://namrata:fs112358@cluster0.uhauuty.mongodb.net/?retryWrites=true&w=majority').then( () => {
    
    console.log('connection succesful');
}).catch((err) => console.log(err));


