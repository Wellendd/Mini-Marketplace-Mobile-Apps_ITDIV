import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type coinBalanceState = {
  balance: number;
};

const initialState: coinBalanceState = {
  balance: 500,
};

export const coinBalance = createSlice({
  initialState,
  name: 'CoinBalance',
  reducers: {
    addCoin: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    removeCoin: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
  },
});

export const {addCoin, removeCoin} = coinBalance.actions;

const coinReducer = coinBalance.reducer;
export default coinReducer;
