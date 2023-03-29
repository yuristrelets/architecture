import { DeliveryStrategy } from "./types/DeliveryStrategy";

export class InternalDeliveryStrategy implements DeliveryStrategy {
  getPrice() {
    return 60;
  }
}
