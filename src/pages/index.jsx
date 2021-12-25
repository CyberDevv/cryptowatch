import axios from 'axios';
import Head from 'next/head';

import Home from '../components/page components/Home.jsx';
// import { load } from '../store/coins.store';

export default function Index({ coins, page }) {

   return (
      <>
         <Head>
            <title>Home | CryptoWatch</title>
         </Head>

         <Home coins= {coins} page={page} />
      </>
   );
}

export async function getServerSideProps({ query: { page = 1 } }) {
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

   const res = await (await axios(url)).data;

   return {
      props: {
         coins: res,
         page,
         fallback: true,
      },
      // revalidate: 30,
   };
}
