import axios from 'axios';
import Head from 'next/head';

import Settings from '../components/page components/Settings.jsx';

const SettingsComponent = ({ coins, user }) => {
   return (
      <>
         <Head>
            <title>Settings | CryptoWatch</title>
         </Head>

         <Settings user={user} />
      </>
   );
};

export default SettingsComponent;
