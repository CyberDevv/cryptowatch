import { Provider } from 'react-redux';
import { GlobalStyles } from 'twin.macro';
import NextNProgress from 'nextjs-progressbar';

import store from '../store/index.store';

import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <NextNProgress height={5} />
            <GlobalStyles />
            <Component {...pageProps} />
            <ToastContainer />
         </Provider>
      </>
   );
}

export default MyApp;
