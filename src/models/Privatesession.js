
import mongoose from "mongoose";
const { Schema } = mongoose;

const PrivatesessionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String
    },
    descPoints:{
        type:[ String ],
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    sessionNumbers:{
        type:Number
    },
    link:{
        type:String
    },
    dates:{
        type:[String],
        required:true
    },
    meetings: [{
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }]

},


{timestamps:true})

export default mongoose.models.Privatesession || mongoose.model('Privatesession', PrivatesessionSchema);