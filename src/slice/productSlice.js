import { fetchArticles } from "@/services/ArticleService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
"products/getAllProducts",
async (_, thunkAPI) => {
const { rejectWithValue } = thunkAPI;
try {
const response = await fetchArticles();

return response.data;
}
catch (error) {
return rejectWithValue(error.message);
}
}
);
const initialState = {produits: [],
loading: false,
success:null,
error:null,
}
const productSlice = createSlice({
name: "products",
initialState,
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchProducts.pending, (state, action) => {
state.loading=true;
})
.addCase(fetchProducts.fulfilled, (state, action) => {
state.loading = false;
state.success=true;
state.error=false;
state.produits=action.payload;
})
.addCase(fetchProducts.rejected, (state, action) => {
state.loading=true;
state.success=false;
state.error=true;
})
},
});
export default productSlice.reducer;