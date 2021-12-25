import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
   // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1`;
   // const data1 = await (await axios(url)).data;
   
   // const url2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=2`;
   // const data2 = await (await axios(url2)).data;
   
   // const url3 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=3`;
   // const data3 = await (await axios(url3)).data;
   
   // const url4 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=4`;
   // const data4 = await (await axios(url4)).data;
   
   // const url5 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=5`;
   // const data5 = await (await axios(url5)).data;

   // const url6 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=6`;
   // const data6 = await (await axios(url6)).data;

   // const url7 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=7`;
   // const data7 = await (await axios(url7)).data;

   // const url8 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=8`;
   // const data8 = await (await axios(url8)).data;

   // const url9 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=9`;
   // const data9 = await (await axios(url9)).data;

   // const url10 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=10`;
   // const data10 = await (await axios(url10)).data;
   
   
   // const data = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10];
   
   // const coins = data.map((coin) => {
   //    return {
   //       id: coin.id,
   //       name: coin.name,
   //       symbol: coin.symbol,
   //       current_price: coin.current_price,
   //       image: coin.image,
   //    };
   // });

   const url = 'https://api.coingecko.com/api/v3/coins/list';
   
   const coins = await (await axios(url)).data;

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
