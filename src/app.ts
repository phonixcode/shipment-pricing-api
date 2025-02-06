import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import shipmentRoutes from "./routes/shipmentRoutes";
import connectDB from "./config/database";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/shipments", shipmentRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Shipment Pricing API!");
  });

export default app;
