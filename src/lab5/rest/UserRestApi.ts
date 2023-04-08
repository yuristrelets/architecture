import { RestApi } from "./RestApi";
import { Entity } from "../types/Entity";

export class UserRestApi extends RestApi {
  beforeUpdateEntity(entity: Entity) {
    console.log("user: remove email");
    delete entity.email;
  }

  validateEntity(entity: Entity): boolean {
    console.log("user: validate");
    return true;
  }

  updateEntity(entity: Entity): Entity {
    console.log("user: update db");
    return entity;
  }
}
