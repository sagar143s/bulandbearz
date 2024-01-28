import mongoose from "mongoose";
const { Schema } = mongoose;

const NewsubscribersSchema = new Schema({
       name:{
         type:String,  
          },
        email:{
        type:String,
          },
          price
            :{
        type:Number,
             },
    subscriptionType
                     :{
        type:String,
       
    },
    package:{
        type:String,
       
       },
    userId:{
    type:String,
 
   }
},


{timestamps:true})

export default mongoose.models.Newsubscribers || mongoose.model('Newsubscribers', NewsubscribersSchema);