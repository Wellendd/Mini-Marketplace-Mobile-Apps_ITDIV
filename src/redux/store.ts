import {configureStore, createStore} from '@reduxjs/toolkit';
import productReducer from '../myProducts/redux/myProductSlice';
import coinReducer from '../minigames/redux/coinBalance';

export const store = configureStore({
  reducer: {
    products: productReducer,
    CoinBalance: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
