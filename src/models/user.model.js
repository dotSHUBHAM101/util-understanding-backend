import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
{

  username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true,
    index : true,   //optimisises search

  },

  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true,
  },

    fullname : {

    type : String,
    required : true,
    trim : true,

    },

    avatar : {
      type : String,  //cloudinary url..
      required : true,
    },
    coverImage : {
      type : String,  //cloudinary url..
    },

    watchHistory : [
      {
        type : Schema.Types.ObjectId, 
        ref : "Vedio",
      }
    ],

    password : {
      type : String,
      required : [true , 'PASSWORD IS REQUIRED .']
    },

    refreshToken : {
      type : String,

    }

} ,{
  timestamps : true
} )



userSchema.pre("save" , async function (next){

  if (!this.isModified("password")) return next(); 
  
  // coz if user changes anything like username or avatar . its paswword would also be encrypted and chaned to prevent that we write that only do operation when password is changed... here isModified is builtin..

  this.password = bcrypt.hash(this.password , 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password){

  return await bcrypt.compare(password , this.password)

}

userSchema.methods.generateAccessToken = function(){
  jwt.sign
  (
    {

    _id: this._id,
    email : this.email,
    username : this.username,
    fullname : this.fullname,
    }
  )
}
userSchema.methods.generateRefreshToken = function(){}

export const User = mongoose.model('User', userSchema);