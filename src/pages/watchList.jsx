import axios from 'axios';
import Head from 'next/head';
import Error from 'next/error';

import WatchList from '../components/page components/WatchList.jsx';

const WatchListComponent = ({ coins }) => {
   return (
      <>
         {coins.length === 0 && <Error statusCode={503} />}

         {coins.length !== 0 && (
            <>
               <Head>
                  <title>Watch | CryptoWatch</title>
               </Head>{' '}
               <WatchList coins={coins} />
            </>
         )}
      </>
   );
};

export async function getStaticProps() {
   try {
      const url =
         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d';

      const res = await (await axios(url)).data;

      return {
         props: {
            coins: res,
         },
         revalidate: 30,
      };
   } catch (error) {
      console.log(error);
      return {
         props: {
            coins: [],
         },
      };
   }
}

export default WatchListComponent;
