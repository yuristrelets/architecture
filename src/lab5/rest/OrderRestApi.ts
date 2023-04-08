import { RestApi } from "./RestApi";
import { Entity } from "../types/Entity";

export class OrderRestApi extends RestApi {
  getAdditionalResponseData(entity: Entity) {
    super.getAdditionalResponseData(entity);

    return { entity };
  }

  validateEntity(entity: Entity): boolean {
    console.log("order: validate");
    return true;
  }

  updateEntity(entity: Entity): Entity {
    console.log("order: update db");
    return entity;
  }
}
