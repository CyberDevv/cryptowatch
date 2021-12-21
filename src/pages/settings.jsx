import axios from 'axios';
import Head from 'next/head';

import Settings from '../components/page components/Settings.jsx';

const SettingsComponent = ({ coins }) => {
   return (
      <>
         <Head>
            <title>Settings | CryptoWatch</title>
         </Head>

         <Settings />
      </>
   );
};

export default SettingsComponent;
