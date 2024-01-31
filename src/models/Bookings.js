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
      type:String,
   },
   aprroved:{
     type:Boolean
   },
   courseId:{
     type:String,
   },
   userId:{
    type:String,
   },
   bookingType:{
    type:String
   }
},


{timestamps:true})

export default mongoose.models.Bookings || mongoose.model('Bookings', BookingSchema);