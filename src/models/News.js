import mongoose from "mongoose";
const { Schema } = mongoose;

const NewsSchema = new Schema({
    title:{
        type:String,    
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
},

{timestamps:true})

export default mongoose.models.NewsSchema || mongoose.model('NewsSchema', NewsSchema);