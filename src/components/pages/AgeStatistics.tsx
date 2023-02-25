import React from 'react';
import { useSelector } from 'react-redux';
import { Employee } from '../../models/Employee';
import { Statistics } from '../Statistics';

export const AgeStatistics: React.FC = () => {
  const employees: Employee[] = useSelector<any, Employee[]>(
    (state) => state.company.employees
  );
  const employeesAge = employees.map((el) => ({
    age: new Date().getFullYear() - new Date(el.birthDate).getFullYear(),
  }));
  return (
    <Statistics field="age" title="Age Statistic" object={employeesAge} />
  );
};
