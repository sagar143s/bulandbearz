import mongoose from "mongoose";
const { Schema } = mongoose;

const CourseSchema = new Schema({
    title:{
        type:String,
    },
    subtitle:{
        type:String
    },
    descPoints:{
        type:[String],
    },
    image:{
        type:String,
        
    },
    price:{
        type:String,
      
    },
    sessionNumbers:{
        type:Number
    },
    maxUsers:{
        type:Number,
    },
    dates:{
        type:[String],
    },

    meetings: [{
        date: {
            type: String,
           
        },
        time: {
            type: String,
       
        },
        link: {
            type: String,
           
        }
    }]
},


{timestamps:true})

export default mongoose.models.Courses || mongoose.model('Courses', CourseSchema);