const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/drivingTest');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    address: {
        street: {
            type: String,
            required: true,
            
        },
        city: {
            type: String,
            required: true,
            maxlength: 30
        },
        state: {
            type: String,
            required: true
        },
        postalcode: {
            type: String, 
            required: true
        }
    }
});


const profileSchema = new mongoose.Schema({
    photo:{
        data:Buffer,
        type:String,
    },
    identification:{
        data:Buffer,
        type:String
    },
    gender:{
        type: String,
        enum:["male","female","other"]
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    disability:{
        type:Boolean,
        required:true,
    },
    disabliltyDescription:{
        type:String,
        required:true
    }

})

const User = mongoose.model("User",userSchema);
const UserProfile = mongoose.model("UserProfile",profileSchema);


module.exports = {
    User,
    UserProfile
    
}