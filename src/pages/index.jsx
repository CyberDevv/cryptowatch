import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

import Home from '../components/page components/Home.jsx';

export default function Index({ coins, page }) {

   return (
      <>
         <Head>
            <title>Home | CryptoWatch</title>
         </Head>

         <Home coins={coins} page={page} />
      </>
   );
}

export async function getServerSideProps({ query: { page = 1 } }) {
   console.log(page);
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

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
