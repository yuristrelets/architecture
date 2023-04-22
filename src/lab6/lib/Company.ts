import { Visitable } from "./types/Visitable";
import { Visitor } from "./types/Visitor";
import { Department } from "./Department";

export class Company implements Visitable {
  constructor(private departments: Department[]) {}

  public getDepartments() {
    return this.departments;
  }

  public accept(visitor: Visitor) {
    visitor.visitCompany(this);
  }
}
