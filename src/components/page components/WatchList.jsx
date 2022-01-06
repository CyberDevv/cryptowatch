import tw from 'twin.macro';
import { useSelector } from 'react-redux';

import Layout from '../Layout';
import { StarSVG } from '../SVG-Icons';
import Watchlist from '../Watchlist.jsx';
import CurrentcyFormatter from '../../utils/CurrencyFormatter';
import { Skeleton, Stack } from '@mui/material';

const WatchList = () => {
   const watchListS = useSelector((state) => state.watchList);
   const coins = useSelector((state) => state.coins.coins);
   const coinsLoading = useSelector((state) => state.coins.loading);

   return (
      <Layout>
         {/* Watchlist */}
         <WishlistWrapper>
            {/* Section title */}
            <p css={[tw`flex items-center space-x-5`]} className='bodyBold'>
               <span>Watchlist</span> <StarSVG />
            </p>

            {watchListS.length === 0 && (
               <NoCoinText className='body'>Your watchist is empty</NoCoinText>
            )}

            {/* WatchList */}

            {/* skeleton */}
            {coinsLoading && coins.length === 0 && (
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

            {watchListS.length !== 0 && (
               <Wishlist>
                  {coins.map(({ id, name, symbol, current_price, image }) =>
                     watchListS.map(({ coinId }) => {
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
            )}
         </WishlistWrapper>
      </Layout>
   );
};

// Tailwind Styles
const WishlistWrapper = tw.div`space-y-8 lg:(mb-14)`;
const NoCoinText = tw.p`text-dark-gray`;
const Wishlist = tw.div`grid grid-cols-5 gap-6`;
const CoinWrapper = tw.div`bg-white rounded-[20px] overflow-hidden hover:(shadow-lg) transition-shadow duration-300`;

export default WatchList;
