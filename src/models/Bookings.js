import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
    name:{
        type:String, 
    },
    email:{
        type:String,   
    },
    phone:{
        type:Number,  
    },
    date:{
        type:String,
    },
    time:{
        type:String,
    },
    package:{
        type:String, 
    },
    link:{
      type: [ String ] ,
   },
   aprroved:{
     type:Boolean,
     default:false
   },
   courseId:{
     type:String,
   },
   userId:{
    type:String,
   },
   privateSession:{
    type:Boolean,
    default:false
   },
   isMultipleSession:{
    type:Boolean,
    default:false
   }
},


{timestamps:true})

export default mongoose.models.Bookings || mongoose.model('Bookings', BookingSchema);