import ShipmentRepository from "../repositories/ShipmentRepository";
import { CargoType } from "../enums/CargoType";

class ShipmentService {
  private cargoMultipliers: Record<CargoType, number> = {
    [CargoType.FRAGILE]: 1.5,
    [CargoType.PERISHABLE]: 1.3,
    [CargoType.HEAVY]: 1.8,
    [CargoType.STANDARD]: 1.0,
  };

  calculateShippingCost(weight: number, distance: number, cargoType: CargoType): number {
    const basePrice = 5;
    const weightFactor = weight * 1.2;
    const distanceFactor = distance * 0.5;
    const cargoMultiplier = this.cargoMultipliers[cargoType] || 1.0;

    return (basePrice + weightFactor + distanceFactor) * cargoMultiplier;
  }

  async createShipment(weight: number, distance: number, cargoType: CargoType) {
    if (!Object.values(CargoType).includes(cargoType)) {
      throw new Error(`Invalid cargo type: ${cargoType}`);
    }

    const cost = this.calculateShippingCost(weight, distance, cargoType);
    return await ShipmentRepository.save({ weight, distance, cargoType, cost });
  }

  async getAllShipments() {
    return await ShipmentRepository.findAll();
  }
}

export default new ShipmentService();
