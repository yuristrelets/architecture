import { DeliveryStrategy } from "./types/DeliveryStrategy";

export class Checkout {
  constructor(private deliveryStrategy: DeliveryStrategy) {}

  setDeliveryStrategy(deliveryStrategy: DeliveryStrategy) {
    this.deliveryStrategy = deliveryStrategy;
  }

  getDeliveryPrice() {
    return this.deliveryStrategy.getPrice();
  }
}
