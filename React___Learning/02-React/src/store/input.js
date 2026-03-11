import { createSlice } from "@reduxjs/toolkit";

const inputSlide = createSlice({
    name: "input",
    initialState: { val: 1 },
    reducers: {
        addition: (state, action) => {
            console.log(action.payload);

        },
        subtraction: (state, action) => {
            console.log(state);

        }
    }
})

export default inputSlide;
export const inputSlideAction = inputSlide.actions;