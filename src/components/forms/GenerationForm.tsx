import {FormControl, TextField, InputLabel, Select, Box, MenuItem, Button} from '@mui/material';
import React from 'react';
import employeeConfig from '../../config/employee-config.json';

type Props = {
    submitFn: (count: number) => void
}

export const GenerationForm: React.FC<Props> = (props) => {
    const {minGeneration, maxGeneration} = employeeConfig;

    const [count, setCount] = React.useState<number>(0);

    function onSubmitFn(event: any) {
        event.preventDefault();
        props.submitFn(count);
        document.querySelector('form')!.reset();
     }
     function handlerGeneration(event: any) {
        setCount(+event.target.value);
     }

    return <Box>
        <form onSubmit={onSubmitFn}>
        <TextField label="employees generation" fullWidth required 
            type="number" onChange={handlerGeneration}
              helperText={`enter amount[${minGeneration}-${maxGeneration}]`}
              inputProps = {{
                min: `${minGeneration}`,max: `${maxGeneration}`
              }}/>
              <Button type="submit">Submit</Button>
        </form>        
    </Box>
}
