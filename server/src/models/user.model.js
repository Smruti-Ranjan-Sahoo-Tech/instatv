const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    firebaseUID:{
        type:String,
        required:true,
        unique:true
    },
    favouriteChannels:{
        type:[String],
        default:[]
    }
})
const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel;