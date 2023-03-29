import { DeliveryStrategy } from "./types/DeliveryStrategy";

export class SelfPickupDeliveryStrategy implements DeliveryStrategy {
  getPrice() {
    return 0;
  }
}
