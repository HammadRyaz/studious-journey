import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: "counter",
    initialState: { val: 1 },
    reducers: {
        increament: (state) => {
            state.val++
        },
        decreament: (state) => {
            state.val--
        },
        addition: (state, action) => {
            state.val = state.val + Number(action.payload);

        },
        subtraction: (state, action) => {
            state.val = state.val - Number(action.payload);
        }
    }
})
export default counterSlice;
export const counterAction = counterSlice.actions;