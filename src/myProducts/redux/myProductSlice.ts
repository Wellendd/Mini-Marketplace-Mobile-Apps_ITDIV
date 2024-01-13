import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type myProductState = {
  products: {id: string; title: string; price: number; image: string}[];
};

const initialState: myProductState = {
  products: [],
};

export const productSlice = createSlice({
  initialState,
  name: 'My Product',
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        price: number;
        image: string;
      }>,
    ) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(f => f.id != action.payload);
    },
  },
});

export const {add, remove} = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
