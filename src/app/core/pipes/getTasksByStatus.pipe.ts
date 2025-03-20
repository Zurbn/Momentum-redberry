import { Pipe, type PipeTransform } from '@angular/core';
import { Status } from 'src/api/models/status/responses/status.model';
import { Task } from 'src/api/models/task/responses/task.model';

@Pipe({
  name: 'appGetTasksByStatus',
  standalone: true,
  pure: false,
})
export class GetTasksByStatusPipe implements PipeTransform {
  transform(
    tasks: Task[],
    status: Status,
    appliedFilters: {
      name: string;
      type: 'department' | 'employee' | 'priority';
    }[]
  ): Task[] {
    const filterByStatus = tasks?.filter(
      (task) => task?.status?.id === status?.id
    );

    if (!appliedFilters.length) {
      return filterByStatus;
    }

    const appliedDepartmentFilters = appliedFilters?.filter(
      (filter) => filter?.type === 'department'
    );
    const appliedPriorityFilters = appliedFilters?.filter(
      (filter) => filter?.type === 'priority'
    );
    const appliedEmployeeFilters = appliedFilters?.filter(
      (filter) => filter?.type === 'employee'
    );

    const filteredByFilters = filterByStatus.filter((task) => {
      const employeeName = task?.employee?.name;
      const departmentName = task?.department?.name;
      const priorityName = task?.priority?.name;

      const departmentMatches =
        appliedDepartmentFilters?.length === 0 ||
        appliedDepartmentFilters?.some(
          (filter) => filter?.name === departmentName
        );
      const priorityMatches =
        appliedPriorityFilters?.length === 0 ||
        appliedPriorityFilters?.some((filter) => filter?.name === priorityName);

      const employeeMatches =
        appliedEmployeeFilters?.length === 0 ||
        appliedEmployeeFilters?.some((filter) => filter?.name === employeeName);

      return departmentMatches && priorityMatches && employeeMatches;
    });

    return filteredByFilters;
  }
}
