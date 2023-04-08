import { RestApi } from "./RestApi";
import { Entity } from "../types/Entity";

export class ProductRestApi extends RestApi {
  afterValidateEntity(entity: Entity, isValid: boolean) {
    super.afterValidateEntity(entity, isValid);

    if (!isValid) {
      console.log("product: send message to admin");
    }
  }

  validateEntity(entity: Entity): boolean {
    console.log("product: validate");
    return !!entity.price;
  }

  updateEntity(entity: Entity): Entity {
    console.log("product: update db");
    return entity;
  }
}
