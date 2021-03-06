import {createSlice} from '@reduxjs/toolkit';

const cartSclice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state,action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        },
        deleteAllItemFromCart: (state, action) => {
            state.itemsInCart = []
        }
    },
});

export const {setItemInCart, deleteItemFromCart, deleteAllItemFromCart} = cartSclice.actions
export default cartSclice.reducer;