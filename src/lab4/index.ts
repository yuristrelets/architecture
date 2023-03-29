import { SelfPickupDeliveryStrategy } from "./SelfPickupDeliveryStrategy";
import { ExternalDeliveryStrategy } from "./ExternalDeliveryStrategy";
import { InternalDeliveryStrategy } from "./InternalDeliveryStrategy";
import { Checkout } from "./Checkout";

const pickupStrategy = new SelfPickupDeliveryStrategy();
const externalStrategy = new ExternalDeliveryStrategy();
const internalStrategy = new InternalDeliveryStrategy();

const checkout = new Checkout(pickupStrategy);
const pickupDeliveryPrice = checkout.getDeliveryPrice();
console.log(pickupDeliveryPrice);
// 0

checkout.setDeliveryStrategy(externalStrategy);
const externalDeliveryPrice = checkout.getDeliveryPrice();
console.log(externalDeliveryPrice);
// 100

checkout.setDeliveryStrategy(internalStrategy);
const internalDeliveryPrice = checkout.getDeliveryPrice();
console.log(internalDeliveryPrice);
// 60
