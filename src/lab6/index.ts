import { Employee } from "./lib/Employee";
import { Department } from "./lib/Department";
import { Company } from "./lib/Company";
import { SalaryReporter } from "./lib/SalaryReporter";

const employeesA = [
  new Employee("FE Software Engineer", 1500),
  new Employee("BE Software Engineer", 1500),
  new Employee("Project Manager", 1200),
  new Employee("CTO", 7000),
];

const employeesB = [new Employee("Security Engineer", 2000)];

const departmentA = new Department("Department A", employeesA);
const departmentB = new Department("Department B", employeesB);
const company = new Company([departmentA, departmentB]);
const reporter = new SalaryReporter();

departmentA.accept(reporter);
// >> Department A
// FE Software Engineer - 1500
// BE Software Engineer - 1500
// Project Manager - 1200
// CTO - 7000
// >> Total department salary: 11200

company.accept(reporter);
// > Salary company report
//
// >> Department A
// FE Software Engineer - 1500
// BE Software Engineer - 1500
// Project Manager - 1200
// CTO - 7000
// >> Total department salary: 11200
//
// >> Department B
// Security Engineer - 2000
// >> Total department salary: 2000
//
// > Total company salary: 13200
