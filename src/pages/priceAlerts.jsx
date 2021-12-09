import axios from 'axios';
import Head from 'next/head';

import PriceAlert from '../components/page components/PriceAlert.jsx';

const PriceAlertComponent = ({ coins, user }) => {
   return (
      <>
         <Head>
            <title>Price Alert | CryptoWatch</title>
         </Head>

         <PriceAlert user={user} />
      </>
   );
};

export default PriceAlertComponent;
