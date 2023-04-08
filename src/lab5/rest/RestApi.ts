import { Entity } from "../types/Entity";
import { RestApiResponse } from "./RestApiResponse";

export abstract class RestApi {
  public processRequest(data: any) {
    try {
      const entity: Entity = this.parseData(data);

      this.beforeValidateEntity(entity);
      const isValid = this.validateEntity(entity);
      this.afterValidateEntity(entity, isValid);

      if (isValid) {
        this.beforeUpdateEntity(entity);
        const updatedEntity = this.updateEntity(entity);
        this.afterUpdateEntity(updatedEntity);

        return new RestApiResponse(
          200,
          this.getAdditionalResponseData(updatedEntity)
        );
      }

      return new RestApiResponse(400, { message: "Invalid entity" });
    } catch (error) {
      return new RestApiResponse(500, { message: "Server error" });
    }
  }

  public parseData(data: any): Entity {
    // convert data to entity
    // will be different in each subclass
    return data;
  }

  abstract validateEntity(entity: Entity): boolean;
  abstract updateEntity(entity: Entity): Entity;

  public beforeValidateEntity(entity: Entity) {}
  public afterValidateEntity(entity: Entity, isValid: boolean) {}

  public beforeUpdateEntity(entity: Entity) {}
  public afterUpdateEntity(entity: Entity) {}

  public getAdditionalResponseData(entity: Entity) {
    return {};
  }
}
