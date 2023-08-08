const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crud').then(()=>{
    console.log("connect sachi rite karyu chhe")
}).catch((e)=>{
    console.log(e);
})