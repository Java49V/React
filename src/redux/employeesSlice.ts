import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";
import { Company } from "../service/Company";

const company = new Company();
const initialState: { employees: Employee[] } = {
    employees: company.getAllEmployees()
}
const employeesSlice = createSlice({
    initialState: initialState,
    name: "employees",
    reducers: {
        addEmployee: (state, data) => {
            company.addEmployee(data.payload);
            state.employees = company.getAllEmployees();
        },
        deleteEmployee: (state, data) => {
            const newEmployees: Employee[] = state.employees.filter(( empl: Employee) => !data.payload.includes(empl.id) );
            state.employees = newEmployees;
        },
        removeEmployee: (state, data) => {
            company.removeEmployee(data.payload);
            state.employees = company.getAllEmployees();
        },
        updateEmployee: (state, data) => {
            company.updateEmployee(data.payload);
            state.employees = company.getAllEmployees();
        }

    }
})
export const employeesAction = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;