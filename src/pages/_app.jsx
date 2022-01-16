import { Provider } from 'react-redux';
import { GlobalStyles } from 'twin.macro';
import NextNProgress from 'nextjs-progressbar';

import store from '../store/index.store';

import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 640,
         md: 768,
         lg: 1024,
         xl: 1280,
         '2xl': 1536,
      },
   },
});

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <NextNProgress height={5} />
               <GlobalStyles />
               <Component {...pageProps} />
               <ToastContainer />
            </ThemeProvider>
         </Provider>
      </>
   );
}

export default MyApp;
