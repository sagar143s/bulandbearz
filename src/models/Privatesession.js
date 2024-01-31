
import mongoose from "mongoose";
const { Schema } = mongoose;

const PrivatesessionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
},


{timestamps:true})

export default mongoose.models.Privatesession || mongoose.model('Privatesession', PrivatesessionSchema);