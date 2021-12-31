import axios from 'axios';
import Head from 'next/head';
import Error from 'next/error';

import CurrencyComponent from '../../components/page components/CurrencyComponent.jsx';

const CurrencyPage = ({ res, sevenDres, oneMonthRes, oneDayRes }) => {
   return (
      <>
         {(res === 0 ||
            sevenDres === 0 ||
            oneMonthRes === 0 ||
            oneDayRes === 0) && <Error statusCode={503} />}

         {res !== 0 && sevenDres !== 0 && oneMonthRes !== 0 && oneDayRes !== 0 && (
            <>
               <Head>
                  {/* TODO: fix the issue of not building when using res.name */}
                  <title>Coin | CryptoWatch</title>
               </Head>

               <CurrencyComponent
                  res={res}
                  sevenDres={sevenDres}
                  oneMonthRes={oneMonthRes}
                  oneDayRes={oneDayRes}
               />
            </>
         )}
      </>
   );
};

export async function getStaticPaths() {
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=15&page=1`;

   const res = await (await axios(url)).data;

   const paths = res.map((coin) => ({
      params: { id: coin.id },
   }));

   return {
      paths,
      fallback: true,
   };
}

export async function getStaticProps({ params }) {
   try {
      const url = `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`;
      const sevenDUrl = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=7`;
      const oneMonthDUrl = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=30`;
      const oneDayUrl = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=1`;

      const coin = await (await axios(url)).data;

      const res = srtipData(coin);
      const sevenDres = await (await axios(sevenDUrl)).data;
      const oneMonthRes = await (await axios(oneMonthDUrl)).data;
      const oneDayRes = await (await axios(oneDayUrl)).data;

      return { props: { res, sevenDres, oneMonthRes, oneDayRes } };
   } catch (error) {
      console.log(error);
      return {
         props: { res: [], sevenDres: [], oneMonthRes: [], oneDayRes: [] },
      };
   }
}

function srtipData(coin) {
   return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image.small,
      current_price: coin.market_data.current_price,
      price_change_percentage_24h: coin.market_data.price_change_percentage_24h,
      high_24h: coin.market_data.high_24h,
      low_24h: coin.market_data.low_24h,
      market_cap: coin.market_data.market_cap,
      total_volume: coin.market_data.total_volume,
      atl: coin.market_data.atl,
      ath: coin.market_data.ath,
      ath_date: coin.market_data.ath_date,
      atl_date: coin.market_data.atl_date,
      description: coin.description,
   };
}

export default CurrencyPage;
