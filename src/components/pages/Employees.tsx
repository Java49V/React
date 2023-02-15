import { Box, List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';

export const Employees: React.FC = () => {
  const employees = useSelector<any, Employee[]>(
    (state) => state.employees.employees
  );
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {!employees.length && (
        <Typography sx={{ fontSize: '2em' }}>Not employees</Typography>
      )}
      {employees.length && <List>{getListEmployees(employees)}</List>}
    </Box>
  );
};
function getListEmployees(employees: Array<Employee>): React.ReactNode {
  return employees.map((emp, ind) => {
    return (
      <ListItem key={ind}>
        {`ID: ${emp.id} NAME: ${emp.name} 
        BIRTHDAY: ${emp.birthDate} DEPARTMENT: ${emp.department} SALARY: ${emp.salary}`}
      </ListItem>
    );
  });
}
