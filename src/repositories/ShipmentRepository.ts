import Shipment from "../models/Shipment";

class ShipmentRepository {
  async save(shipmentData: any) {
    return await Shipment.create(shipmentData);
  }

  async findAll() {
    return await Shipment.find({});
  }
}

export default new ShipmentRepository();
