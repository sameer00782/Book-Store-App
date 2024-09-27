import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        console.log("Signup request received:", req.body); // Log the incoming request

        // Validate the incoming data
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const createdUser = new User({
            fullName: fullname, // Use fullName to match the schema
            email,
            password: hashedPassword,
        });

        await createdUser.save(); // Save the user to the database
        res.status(201).json({ message: "User Created Successfully" ,user:{
            _id: createdUser._id,
            fullname: createdUser.fullName,
            email:createdUser.email,
        }});
    } catch (error) {
        console.error("Error during signup:", error); // Log the error
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body; 
        
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        // Compare the entered password with the stored hashed password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Successful login, return user info (without password)
        res.status(200).json({
            message: "Login Successful",
            user: {
                id: user._id, // Use _id as it's the default in MongoDB
                fullname: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
