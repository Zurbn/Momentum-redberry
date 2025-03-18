import { Department } from "../../department/responses/department.model";

export interface Employee {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department: Department;
}
