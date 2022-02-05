import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import toysReducer from './toys/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        toy: toysReducer,
    },
});