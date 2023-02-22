import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { Employee } from '../../models/Employee';
import { statAge } from '../../service/EmployeesService';
import { Statistics } from '../Statistics';

export const AgeStatistics: React.FC = () => {
  const employees = useSelector<any, Employee[]>(
    (state) => state.employees.employees
  );

  return (
    <Box sx={{ width: '50vw', height: '50vh' }}>
      {employees.length ? (
        <Statistics title={'Age statistic'} gridProps={statAge(employees)} />
      ) : (
        <Typography sx={{ fontSize: '1.7em' }}>No values</Typography>
      )}
    </Box>
  );
};
