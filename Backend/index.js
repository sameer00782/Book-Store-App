import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

app.use(cors({
  origin: 'https://book-store-app-frontend-five.vercel.app', // Allow your frontend domain
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;


// MongoDB Connection
try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/users", userRoute); // This line is important

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
