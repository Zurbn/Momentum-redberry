import { DepartmentTag } from './department.enum';
import { Priority } from './priority.enum';

export interface MomentumTaskCardModel {
  priority: Priority;
  department: DepartmentTag;
  date: string;
  title: string;
  description: string;
  picture: string;
  numberOfComments: number;
}
