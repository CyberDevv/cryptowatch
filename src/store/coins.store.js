import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialStateValue = [
   {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'btc',
      current_price: 51675,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
   },
   {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'eth',
      current_price: 4105.78,
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
   },
   {
      id: 'binancecoin',
      name: 'Binance Coin',
      symbol: 'bnb',
      current_price: 564.14,
      image: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615',
   },
   {
      id: 'tether',
      name: 'Tether',
      symbol: 'usdt',
      current_price: 1,
      image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
   },
   {
      id: 'staked-ether',
      name: 'Lido Staked Ether',
      symbol: 'steth',
      current_price: 4077.6,
      image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
   },
   {
      id: 'the-sandbox',
      name: 'The Sandbox',
      symbol: 'sand',
      current_price: 6.67,
      image: 'https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942',
   },
   {
      id: 'ftx-token',
      name: 'FTX Token',
      symbol: 'ftt',
      current_price: 43.39,
      image: 'https://assets.coingecko.com/coins/images/9026/large/F.png?1609051564',
   },
   {
      id: 'hedera-hashgraph',
      name: 'Hedera',
      symbol: 'hbar',
      current_price: 0.325814,
      image: 'https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634',
   },
];


// export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
//    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1`;
//    const data1 = await (await axios(url)).data;

//    const url2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=2`;
//    const data2 = await (await axios(url2)).data;

//    const url3 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=3`;
//    const data3 = await (await axios(url3)).data;

//    const url4 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=4`;
//    const data4 = await (await axios(url4)).data;

//    const url5 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=5`;
//    const data5 = await (await axios(url5)).data;

//    const url6 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=6`;
//    const data6 = await (await axios(url6)).data;

//    const url7 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=7`;
//    const data7 = await (await axios(url7)).data;

//    const url8 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=8`;
//    const data8 = await (await axios(url8)).data;

//    const url9 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=9`;
//    const data9 = await (await axios(url9)).data;

//    const url10 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=10`;
//    const data10 = await (await axios(url10)).data;

//    const data = [
//       ...data1,
//       ...data2,
//       ...data3,
//       ...data4,
//       ...data5,
//       ...data6,
//       ...data7,
//       ...data8,
//       ...data9,
//       ...data10,
//    ];

//    const coins = data.map((coin) => {
//       return {
//          id: coin.id,
//          name: coin.name,
//          symbol: coin.symbol,
//          current_price: coin.current_price,
//          image: coin.image,
//       };
//    });

//    // const url = 'https://api.coingecko.com/api/v3/coins/list';

//    // const coins = await (await axios(url)).data;

//    return coins;
// });

const coinSlice = createSlice({
   name: 'coins',
   initialState: initialStateValue,
   reducers: {
      load: (state, action) => {
         state.watchList = action.payload;
      },
   },
   // extraReducers: (builder) => {
   //    builder.addCase(fetchCoins.fulfilled, (state, action) => {
   //       return action.payload;
   //    });
   // },
});

export const { load } = coinSlice.actions;

export default coinSlice.reducer;

