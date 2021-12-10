import { GlobalStyles } from 'twin.macro';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   const user = 'null';
   return (
      <>
         <NextNProgress height={5} />
         <GlobalStyles />
         <Component user={user} {...pageProps} />
      </>
   );
}

export default MyApp;
