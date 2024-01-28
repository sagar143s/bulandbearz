import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscriptionSchema = new Schema({
    name:{
        type:String,    
    },
    price:{
        type:String,
    },
    subscriptionType:{
        type:String,
    },
    planId:{
        type:String
    },
    productId:
    {
        type:String
    }
},

{timestamps:true})

export default mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);