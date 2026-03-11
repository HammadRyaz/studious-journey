import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import inputSlide from './input';


export const mainStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        input: inputSlide.reducer
    }
})

