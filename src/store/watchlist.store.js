import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
   { coinId: 'bitcoin' },
   { coinId: 'ethereum' },
   { coinId: 'ripple' },
   { coinId: 'usd-coin' },
   { coinId: 'tether' },
   { coinId: 'duo-2' },
   { coinId: 'nem' },
];

export const watchListSlice = createSlice({
   name: 'watchList',
   initialState: initialStateValue,
   reducers: {
      load: (state, action) => {
         state.watchList = action.payload;
      },
   },
});


export const { load } = watchListSlice.actions;

export default watchListSlice.reducer;
