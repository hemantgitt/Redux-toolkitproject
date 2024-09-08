import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status : "idle"
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending , (state , action)=>{
         state.status = "Loading"
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(getProducts.rejected , (state , action)=>{
        state.status = "error"
    })
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, action) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();
//     dispatch(fetchProducts(result));
//   };
// }
