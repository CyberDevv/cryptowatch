import tw from 'twin.macro';
import Link from 'next/link';
import { Button, Skeleton, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import Layout from '../Layout';
import { StarSVG } from '../SVG-Icons';
import CoinTable from '../CoinTable.jsx';
import Watchlist from '../Watchlist.jsx';

import CurrentcyFormatter from '../../utils/CurrencyFormatter';

const Home = ({ coins, page }) => {
   // Gets the user from the store
   const user = useSelector((state) => state.user.value);
   const watchListS = useSelector((state) => state.watchList);
   const coinss = useSelector((state) => state.coins.coins);
   const coinsLoading = useSelector((state) => state.coins.loading);

   return (
      <Layout>
         {/* Watchlist */}
         {user.email && watchListS.length !== 0 && (
            <WishlistWrapper>
               {/* Section title */}
               <div css={[tw`flex items-center justify-between`]}>
                  <p
                     css={[tw`flex items-center space-x-5`]}
                     className='bodyBold'
                  >
                     <span>Watchlist</span> <StarSVG />
                  </p>

                  <Link href='/watchList'>
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
               {/* skeleton */}
               {coinsLoading && coinss.length === 0 && (
                  <Stack direction='row' spacing={4}>
                     <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width={210}
                        height={164}
                        sx={{ borderRadius: '20px' }}
                     />
                     <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width={210}
                        height={164}
                        sx={{ borderRadius: '20px' }}
                     />
                     <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width={210}
                        height={164}
                        sx={{ borderRadius: '20px' }}
                     />
                  </Stack>
               )}

               <Wishlist>
                  {coinss.map(({ id, name, symbol, current_price, image }) =>
                     watchListS.slice(0, 5).map(({ coinId }) => {
                        if (coinId === id) {
                           const FormattedPrice =
                              CurrentcyFormatter(current_price);
                           return (
                              <CoinWrapper key={id}>
                                 <Watchlist
                                    name={name}
                                    symbol={symbol}
                                    formattedPrice={FormattedPrice}
                                    image={image}
                                    id={id}
                                 />
                              </CoinWrapper>
                           );
                        }
                     })
                  )}
               </Wishlist>
            </WishlistWrapper>
         )}

         {/* All coins */}
         <div css={[tw`mt-8 lg:mt-0`]}>
            {/* Section title */}

            <p css={[tw`mb-10`]} className='bodyBold'>
               All Coins
            </p>

            {/* coin Table */}
            <CoinTable coins={coins} page={page} />
         </div>
      </Layout>
   );
};

// Tailwind Styles
const WishlistWrapper = tw.div`space-y-4 lg:(mb-14 mt-0 space-y-8)`;
const Wishlist = tw.div`grid grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6`;
const CoinWrapper = tw.div`bg-white rounded-[20px] overflow-hidden hover:(shadow-lg) transition-shadow duration-300 `;

export default Home;
