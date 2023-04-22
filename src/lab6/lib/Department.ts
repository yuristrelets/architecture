import { Visitable } from "./types/Visitable";
import { Employee } from "./Employee";
import { Visitor } from "./types/Visitor";

export class Department implements Visitable {
  constructor(private name: string, private employees: Employee[]) {}

  public getName() {
    return this.name;
  }

  public getEmployees() {
    return this.employees;
  }

  public accept(visitor: Visitor) {
    visitor.visitDepartment(this);
  }
}
