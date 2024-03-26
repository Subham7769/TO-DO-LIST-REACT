const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
    },
    body:{
        type: 'string',
        required: true,
    },
    user:[
        {
        type: mongoose.Types.ObjectId,
        ref:"User"
        },
    ],
},{ timestamp:true})

module.exports = mongoose.model("List",listSchema)