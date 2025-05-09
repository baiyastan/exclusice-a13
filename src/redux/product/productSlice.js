import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getProductFetch = createAsyncThunk(
    "getProduct/fetch",
    async (category, thunkAPI) => {
        try {
            let url = "/products";

            if(category) {
                url = `/products/category/${category}`
            }
            const res = await apiClient.get(url)
            return res.data.products
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
)

const productSlise = createSlice({
    name: "product",
    initialState: {
        product:[],
        loading: false,
        error: null,
        category: ""
    },
    reducers:{
        setCategory: (state, action) => {
            state.category = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProductFetch.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProductFetch.fulfilled, (state,action) => {
            state.loading = false;
            state.product = action.payload;

        })
        .addCase(getProductFetch.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }

})

export const {setCategory} = productSlise.actions;
export default productSlise.reducer