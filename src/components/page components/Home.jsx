import tw from 'twin.macro';
import Link from 'next/link';
import {
   Avatar,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Button,
} from '@mui/material';

import Layout from '../Layout';
import { StarSVG } from '../SVG-Icons';
import CoinTable from '../CoinTable.jsx';

const Home = () => {
   return (
      <Layout>
         {/* Watchlist */}
         {coins.length !== 0 && (
            <WishlistWrapper>
               <div css={[tw`flex items-center justify-between`]}>
                  <p
                     css={[tw`flex items-center space-x-5`]}
                     className='bodyBold'
                  >
                     <span>Watchlist</span> <StarSVG />
                  </p>

                  <Link href=''>
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

               <Wishlist>
                  {coins.map(({ name, symbol, price }, index) => {
                     return (
                        <CoinWrapper>
                           <div css={[tw`text-right mb-1`]}>
                              <StarSVG />
                           </div>

                           <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                              <ListItemAvatar>
                                 <Avatar>
                                    <StarSVG />
                                 </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                 primary={
                                    <>
                                       <CoinName>{name}</CoinName>
                                    </>
                                 }
                                 secondary={
                                    <>
                                       <CoinABBR>{symbol}</CoinABBR>
                                    </>
                                 }
                              />
                           </ListItem>

                           <Price>${price}</Price>
                        </CoinWrapper>
                     );
                  })}
               </Wishlist>
            </WishlistWrapper>
         )}

         {/* All coins */}
         <div>
            <div css={[tw`flex items-center justify-between mb-10`]}>
               <p className='bodyBold'>All Coins</p>

               <Link href=''>
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
            <CoinTable />
         </div>
      </Layout>
   );
};

const coins = [
   {
      name: 'Bitcoin',
      symbol: 'Btc',
      price: 55000,
   },
   {
      name: 'Ethereum',
      symbol: 'eth',
      price: 4234,
   },
   {
      name: 'Solana',
      symbol: 'Sol',
      price: 219,
   },
   {
      name: 'Matic',
      symbol: 'Mat',
      price: 1.2,
   },
   {
      name: 'Ripple',
      symbol: 'XPR',
      price: 0.8,
   },
];

// Tailwind Styles
const WishlistWrapper = tw.div`space-y-8 lg:(mb-14)`;
const Wishlist = tw.div`grid grid-cols-5 gap-6`;
const CoinWrapper = tw.div`bg-white rounded-[20px] px-5 py-4 `;
const CoinName = tw.p`text-[18px] text-dark-darker leading-[28px]`;
const CoinABBR = tw.p`capitalize text-[#505780] text-[14px] leading-[17px] tracking-[-0.025em]`;
const Price = tw.p`text-[24px] leading-[29px] tracking-[-0.025em] text-dark-darker mb-2`;

export default Home;
