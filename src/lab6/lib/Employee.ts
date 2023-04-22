export class Employee {
  constructor(private role: string, private salary: number) {}

  public getRole() {
    return this.role;
  }

  public getSalary() {
    return this.salary;
  }
}
