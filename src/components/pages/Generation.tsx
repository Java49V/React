import React from 'react';
import {useDispatch} from 'react-redux';
import { employeesActions } from '../../redux/employees-slice';
import { createRandomEmployee } from '../../service/EmployeesService';
import { GenerationForm } from '../forms/GenerationForm';
import { Alert, Box, Stack } from '@mui/material';

export const Generation: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    const [alert, setAlert] = React.useState<boolean>(false);
    const dispatch = useDispatch();

    return <Box>
        {!alert && 
            <GenerationForm  submitFn={(num) => {
                for(let i=0; i<num; i++) {
                    dispatch(employeesActions.addEmployee(createRandomEmployee()));
                }
                setCount(num);
                setAlert(true);
                setTimeout( () => setAlert(false), 4000);
                return true;
            }
            }/>
        }
        { alert && 
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert variant="filled" severity="success">
                This is a success alert — {count} records are created
              </Alert>
            </Stack>
        }
    </Box>
}