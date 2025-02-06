import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  weight: { type: Number, required: true },
  distance: { type: Number, required: true },
  cargoType: { type: String, required: true },
  cost: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Shipment", ShipmentSchema);
