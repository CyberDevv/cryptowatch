import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialStateValue = { coinsWithNoData: [], loading: false, error: false };

export const fetchCoinsWithNoData = createAsyncThunk(
   'coins/fetchCoinsWithNoData',
   async () => {
      const url = 'https://api.coingecko.com/api/v3/coins/list';

      const coins = await (await axios(url)).data;

      return coins;
   }
);

const coinSlice = createSlice({
   name: 'coinsWithNoData',
   initialState: initialStateValue,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchCoinsWithNoData.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchCoinsWithNoData.fulfilled, (state, action) => {
         (state.coinsWithNoData = action.payload), (state.loading = false);
      });
      builder.addCase(fetchCoinsWithNoData.rejected, (state) => {
         state.error = true;
      });
   },
});

export default coinSlice.reducer;
