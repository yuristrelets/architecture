import { Department } from "../Department";
import { Company } from "../Company";

export interface Visitor {
  visitCompany(company: Company);
  visitDepartment(department: Department);
}
