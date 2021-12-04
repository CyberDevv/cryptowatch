import Head from 'next/head';

import Home from '../components/page components/Home.jsx';

export default function Index() {
   return (
      <>
         <Head>
            <title>Home | CryptoWatch</title>
         </Head>

         <Home />
      </>
   );
}
