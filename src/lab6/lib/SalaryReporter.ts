import { Visitor } from "./types/Visitor";
import { Department } from "./Department";
import { Company } from "./Company";

type DepartmentReport = {
  name: string;
  totalSalary: number;
  list: string[];
};

export class SalaryReporter implements Visitor {
  private makeDepartmentReport(department: Department): DepartmentReport {
    const report: DepartmentReport = {
      name: department.getName(),
      totalSalary: 0,
      list: [],
    };

    department.getEmployees().forEach((employee) => {
      report.totalSalary += employee.getSalary();
      report.list.push(`${employee.getRole()} - ${employee.getSalary()}`);
    });

    return report;
  }

  private printDepartmentReport(report: DepartmentReport) {
    console.log(">>", report.name);
    console.log(report.list.join("\n"));
    console.log(">> Total department salary:", report.totalSalary);
    console.log("");
  }

  public visitDepartment(department: Department) {
    this.printDepartmentReport(this.makeDepartmentReport(department));
  }

  public visitCompany(company: Company) {
    console.log("> Salary company report");
    console.log("");

    let totalSalary = 0;

    company.getDepartments().forEach((department) => {
      const report = this.makeDepartmentReport(department);
      this.printDepartmentReport(report);

      totalSalary += report.totalSalary;
    });

    console.log("> Total company salary:", totalSalary);
    console.log("");
  }
}
