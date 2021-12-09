import axios from 'axios';
import Head from 'next/head';

import Home from '../components/page components/Home.jsx';

export default function Index({ coins, user }) {
   return (
      <>
         <Head>
            <title>Home | CryptoWatch</title>
         </Head>

         <Home user={user} coins={coins} />
      </>
   );
}

export async function getStaticProps() {
   const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d';

   const res = await (await axios(url)).data;
   
   return {
      props: {
         coins: res,
      },
      revalidate: 30,
   };
}
