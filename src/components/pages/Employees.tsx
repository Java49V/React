import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { EmployeeForm } from '../forms/EmployeeForm';

import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit, PersonAdd } from '@mui/icons-material';
import './table.css';
import { employeesActions } from '../../redux/employees-slice';
export const Employees: React.FC = () => {
  const [flNewEmpl, FlEmpl] = React.useState(false);
  const [flEdit, FlEdit] = React.useState(false);
  const dispatch = useDispatch();
  const selectedEmployee = React.useRef<Employee>();
  const authUser = useSelector<any, string>(
    (state) => state.auth.authenticated
  );
  const columns = React.useRef<GridColumns>([
    {
      field: 'name',
      headerClassName: 'header',
      headerName: 'Employee Name',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'birthDate',
      headerName: 'Date of Birth',
      flex: 1,
      headerClassName: 'header',
      type: 'date',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'department',
      headerName: 'Department',
      headerClassName: 'header',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'salary',
      headerName: 'Salary (NIS)',
      headerClassName: 'header',
      flex: 0.7,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: (params) => {
        return authUser.includes('admin')
          ? [
              <GridActionsCellItem
                label="remove"
                icon={<Delete />}
                onClick={() =>
                  dispatch(employeesActions.removeEmployee(+params.id))
                }
              />,
              <GridActionsCellItem
                label="update"
                icon={<Edit />}
                onClick={() => {
                  const empl = employees.find((e) => e.id == +params.id);
                  if (empl) {
                    const factor = empl.salary > 20000 ? 0.8 : 1.2;
                    const emplCopy = { ...empl, salary: empl.salary * factor };
                    dispatch(employeesActions.updateEmployee(emplCopy));
                  }
                }}
              />,
              <GridActionsCellItem
                label="add"
                icon={<PersonAdd />}
                onClick={() => {
                  FlEmpl(true);
                }}
              />,
            ]
          : [];
      },
    },
  ]);
  const employees = useSelector<any, Employee[]>(
    (state) => state.company.employees
  );
  return (
    <Box sx={{ height: '80vh', width: '80vw' }}>
      {!flEdit && !flNewEmpl && (
        <DataGrid columns={columns.current} rows={employees} />
      )}
      {flEdit && !flNewEmpl && (
        <EmployeeForm
          submitFn={(employee) => {
            dispatch(employeesActions.updateEmployee(employee));
            FlEdit(false);
            return true;
          }}
          employeeUpdate={selectedEmployee.current}
        />
      )}
      {flNewEmpl && !flEdit && (
        <EmployeeForm
          submitFn={(employee) => {
            dispatch(employeesActions.addEmployee(employee));
            FlEmpl(false);
            return true;
          }}
        />
      )}
    </Box>
  );
};

function getListItems(employees: Employee[]): React.ReactNode {
  return employees.map((empl, index) => (
    <ListItem key={index}>
      <Typography>{JSON.stringify(empl)}</Typography>
    </ListItem>
  ));
}
