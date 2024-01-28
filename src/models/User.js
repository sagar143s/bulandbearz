import mongoose from 'mongoose';
const { Schema } = mongoose;


const UserSchema = new Schema({

name : 
{
    type : String,
    required : true
},
email :
{
   type:String,
   unique:true,
   required: true
},
password :
{
    type : String,
    required:true
},
subscribed :
{
    type : Boolean,
    default:false
},
 subscriptionType:{
        type:String,
        default:''
    },
price:{
        type:Number,
        default:''
    },
    package:{
        type:String,
        default:''
    },
    image:{
        type:String
    },
    isGoogle:{
        type:Boolean,
        default:false
    }

},

{timestamps:true}
)

export default mongoose.models.User || mongoose.model('User', UserSchema);