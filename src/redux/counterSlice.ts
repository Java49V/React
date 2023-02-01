import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    count: 0
}
const counterSlice = createSlice ({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment: (state) =>{
            state.count++
        },
        decrement: (state) => {
            state.count--;
        },
        reset: state => {
            state.count = initialState.count;
        }
    }
})