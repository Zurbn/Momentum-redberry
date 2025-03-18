import { DepartmentTag } from './department.enum';
import { PriorityEnum } from './priority.enum';

export interface MomentumTaskCardModel {
  priority: PriorityEnum;
  department: DepartmentTag;
  date: string;
  title: string;
  description: string;
  picture: string;
  numberOfComments: number;
}
