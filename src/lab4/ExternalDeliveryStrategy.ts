import { DeliveryStrategy } from "./types/DeliveryStrategy";

export class ExternalDeliveryStrategy implements DeliveryStrategy {
  getPrice() {
    return 100;
  }
}
