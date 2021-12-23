import { Provider } from 'react-redux';
import { GlobalStyles } from 'twin.macro';
import NextNProgress from 'nextjs-progressbar';

import store from '../store/index.store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <NextNProgress height={5} />
            <GlobalStyles />
            <Component {...pageProps} />
         </Provider>
      </>
   );
}

export default MyApp;
