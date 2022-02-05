import {createSlice} from '@reduxjs/toolkit';

const toysSclice = createSlice({
    name: 'cart',
    initialState: {
        currentToy: null
    },
    reducers: {
        setCurrentToy: (state, action) => {
            state.currentToy = action.payload
        },
        deleteCurrentToy: (state, action) => {
            state.currentToy = null;
        }
    },
});

export const { deleteCurrentToy, setCurrentToy} = toysSclice.actions
export default toysSclice.reducer;