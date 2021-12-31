import axios from 'axios';
import Head from 'next/head';
import Error from 'next/error';

import Home from '../components/page components/Home.jsx';
// import { load } from '../store/coins.store';

export default function Index({ coins, page }) {
   return (
      <>
         {coins.length === 0 && <Error statusCode={503} />}

         {coins.length !== 0 && (
            <>
               <Head>
                  <title>Home | CryptoWatch</title>
               </Head>
               <Home coins={coins} page={page} />{' '}
            </>
         )}
      </>
   );
}

export async function getServerSideProps({ query: { page = 1 } }) {
   try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

      const coin = await (await axios(url)).data;
      const res = coin.map(srtipData);

      return {
         props: {
            coins: res,
            page,
            fallback: true,
         },
      };
   } catch (error) {
      console.log(error);
      return {
         props: {
            coins: [],
            page,
         },
      };
   }
}

function srtipData(coin) {
   return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      price_change_percentage_7d_in_currency:
         coin.price_change_percentage_7d_in_currency,
      price_change_percentage_1h_in_currency:
         coin.price_change_percentage_1h_in_currency,
      spackline_7d: coin.sparkline_in_7d.price,
   };
}
