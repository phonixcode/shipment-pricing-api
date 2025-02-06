import express from "express";
import ShipmentController from "../controllers/ShipmentController";

const router = express.Router();

router.get("/", ShipmentController.getShipments);
router.post("/calculate", ShipmentController.calculateAndSave);

export default router;
