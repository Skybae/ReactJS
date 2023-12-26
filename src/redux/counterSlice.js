import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0},
    reducers: {
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) =>{
            if(state.value>0){
                state.value = state.value-1;
            }
           
        }
    }
});

export const {increment, decrement} =counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;