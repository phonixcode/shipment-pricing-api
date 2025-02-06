import { Request, Response } from "express";
import ShipmentService from "../services/ShipmentService";
import { CargoType } from "../enums/CargoType";

class ShipmentController {
  async calculateAndSave(req: Request, res: Response){
    try {
      const { weight, distance, cargoType } = req.body;

      if (!Object.values(CargoType).includes(cargoType)) {
        res.status(400).json({ error: `Invalid cargo type: ${cargoType}` });
        return;
      }

      const shipment = await ShipmentService.createShipment(weight, distance, cargoType);
      res.status(201).json(shipment);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getShipments(req: Request, res: Response) {
    try {
      const shipments = await ShipmentService.getAllShipments();
      res.status(200).json(shipments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ShipmentController();
