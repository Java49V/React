import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../model/Employee";


const initialState: { employees: Employee[] } = {
    employees: []
}
const employeesSlice = createSlice({
    initialState: initialState,
    name: "employees",
    reducers: {
        addEmployee: (state, data) => {
            state.employees.push(data.payload);
        },
        deleteEmployee: (state, data) => {
            const newEmployees: Employee[] = state.employees.filter(( empl: Employee) => !data.payload.includes(empl.id) );
            state.employees = newEmployees;
        }

    }
})
export const employeesAction = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;