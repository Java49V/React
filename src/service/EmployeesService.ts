import { Employee } from '../model/Employee';
import { getRandomDate, getRandomNumber } from '../utils/random';
import configEmp from '../config/employee-config.json';

export type Stat = {
  min: number;
  max: number;
  avr: number;
};
export function statAge(employees: Array<Employee>): Stat {
  const dateCurrent: Date = new Date();
  const yearCurrent: number = dateCurrent.getFullYear();
  const minResYear = getAgeEmployee(employees[0], yearCurrent);
  return employees.reduce(
    (res, emp) => {
      const ageEmp: number = getAgeEmployee(emp, yearCurrent);
      if (ageEmp < res.min) {
        res.min = ageEmp;
      }
      if (ageEmp > res.max) {
        res.max = ageEmp;
      }
      res.avr += Math.floor(ageEmp / employees.length);
      return res;
    },
    { min: minResYear, max: minResYear, avr: 0 }
  );
}

export function statSalary(employees: Array<Employee>): Stat {
  return employees.reduce(
    (res, emp) => {
      if (emp.salary < res.min) {
        res.min = emp.salary;
      }
      if (emp.salary > res.max) {
        res.max = emp.salary;
      }
      res.avr += Math.floor(emp.salary / employees.length);
      return res;
    },
    { min: employees[0].salary, max: employees[0].salary, avr: 0 }
  );
}

export function createRandomEmployee(employees: Employee[]): Employee {
  return {
    id: getId(employees),
    name: getRandomName(),
    birthDate: getBirthDate(),
    department:
      configEmp.department[getRandomNumber(0, configEmp.department.length)],
    salary: getRandomNumber(configEmp.minSalary, configEmp.maxSalary),
  };
}

function getRandomName(): string {
  const NAMES: string[] = [
    'Serj', 'Iziya', 'Rotshild', 'Ashot', 'Vazgen', 'Ara', 'Sara', 'Nariman',
  ];
  return NAMES[getRandomNumber(0, NAMES.length)];
}

function isIdUnique(employees: Employee[], id: number): boolean {
  return employees.reduce(
    (res, emp) => (emp.id === id ? (res = true) : res),
    false
  );
}

function getId(employees: Employee[]): number {
  let id: number = getRandomNumber(configEmp.minId, configEmp.maxID);
  let res: boolean = isIdUnique(employees, id);
  while (res) {
    id = getRandomNumber(configEmp.minId, configEmp.maxID);
    res = isIdUnique(employees, id);
  }
  return id;
}

function getBirthDate(): string {
  const randomDate = getRandomDate(
    configEmp.minBirthYear,
    configEmp.maxBirthYear
  );
  const dateArr = randomDate.toISOString().split('T');
  return dateArr[0];
}

function getAgeEmployee(employee: Employee, currentYear: number): number {
  const yearEmp: number = +employee.birthDate.slice(0, 4);
  const ageEmp: number = currentYear - yearEmp;
  return ageEmp;
}


