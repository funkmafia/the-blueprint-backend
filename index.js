import cors from "cors"; // allows front-end access
import express from "express"; // thebackend framework
import mongoose from "mongoose"; // connects to mongoDB
import dotenv from "dotenv"; // loads the env var from .env file
dotenv.config();
import contactRoutes from "./routes/contact"; // importing the file that handles the route

const app = express(); // sets up the express ap
const PORT = process.env.PORT || 3001; // gets the port number from .env or defaults to 3001

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); // middleware tells express to automatically parse JSON from incoming requests, i.e contact form data

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("MonoDB connection error", err));

app.use("/contact", contactRoutes); // registers all the routes in folder

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// starts the express server on the defined port, logs a message once livwe!!
