import { GlobalStyles } from 'twin.macro';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   const user = 'null';
   return (
      <>
         <GlobalStyles />
         <Component user={user} {...pageProps} />
      </>
   );
}

export default MyApp;
