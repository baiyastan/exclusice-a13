import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getCategoryThunk = createAsyncThunk(
    "getCategory/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await apiClient.get("/products/category-list")

            console.log(res);
            
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(getCategoryThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(getCategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default categorySlice.reducer