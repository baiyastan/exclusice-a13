import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
    },
    reducers : {
        addWish:(state,action) => {
            state.items.push(action.payload)
        }
    }
})

export const {addWish} = wishSlice.actions;
export default wishSlice.reducer;