import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // This line indicates that fullName is required
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that email is unique
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
export default User;
