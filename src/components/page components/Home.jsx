import tw from 'twin.macro';
import Link from 'next/link';
import { Button } from '@mui/material';

import Layout from '../Layout';
import { StarSVG } from '../SVG-Icons';
import CoinTable from '../CoinTable.jsx';
import Watchlist from '../Watchlist.jsx';
import CurrentcyFormatter from '../../utils/CurrencyFormatter';

const Home = ({ coins }) => {
   return (
      <Layout>
         {/* Watchlist */}
         {coins.length !== 0 && (
            <WishlistWrapper>
               {/* Section title */}
               <div css={[tw`flex items-center justify-between`]}>
                  <p
                     css={[tw`flex items-center space-x-5`]}
                     className='bodyBold'
                  >
                     <span>Watchlist</span> <StarSVG />
                  </p>

                  <Link href='/'>
                     <a>
                        <Button
                           className='smallBold'
                           sx={{ textTransform: 'none', color: '#3754DB' }}
                        >
                           View all
                        </Button>
                     </a>
                  </Link>
               </div>

               {/* WatchList */}
               <Wishlist>
                  {coins
                     .slice(0, 5)
                     .map(({ id, name, symbol, current_price, image }) => {
                        const FormattedPrice =
                           CurrentcyFormatter(current_price);
                        return (
                           <CoinWrapper key={id}>
                              <Watchlist
                                 name={name}
                                 symbol={symbol}
                                 formattedPrice={FormattedPrice}
                                 image={image}
                              />
                           </CoinWrapper>
                        );
                     })}
               </Wishlist>
            </WishlistWrapper>
         )}

         {/* All coins */}
         <div>
            {/* Section title */}

            <div css={[tw`flex items-center justify-between mb-10`]}>
               <p className='bodyBold'>All Coins</p>

               <Link href='/'>
                  <a>
                     <Button
                        className='smallBold'
                        sx={{ textTransform: 'none', color: '#3754DB' }}
                     >
                        View all
                     </Button>
                  </a>
               </Link>
            </div>

            {/* coin Table */}
            <CoinTable coins= {coins} />
         </div>
      </Layout>
   );
};

// const coins = [
//    {
//       name: 'Bitcoin',
//       symbol: 'Btc',
//       price: 55000,
//    },
//    {
//       name: 'Ethereum',
//       symbol: 'eth',
//       price: 4234,
//    },
//    {
//       name: 'Solana',
//       symbol: 'Sol',
//       price: 219,
//    },
//    {
//       name: 'Matic',
//       symbol: 'Mat',
//       price: 1.2,
//    },
//    {
//       name: 'Ripple',
//       symbol: 'XPR',
//       price: 0.8,
//    },
// ];

// Tailwind Styles
const WishlistWrapper = tw.div`space-y-8 lg:(mb-14)`;
const Wishlist = tw.div`grid grid-cols-5 gap-6`;
const CoinWrapper = tw.div`bg-white rounded-[20px] px-5 py-4 `;

export default Home;
