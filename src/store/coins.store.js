import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=500&page=1`;

   const coins = await (await axios(url)).data;

   // const coins = coins.map((coin) => {
   //    return { coinId: coin.id, coinName: coin.name };
   // });

   return coins;
});

const coinSlice = createSlice({
   name: 'coins',
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchCoins.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

// export const {fetchCoins} = coinSlice.actions

// export const {  } = coinsSlice.;

export default coinSlice.reducer;
