import tw from 'twin.macro';
import Link from 'next/link';

import Layout from '../Layout';
import { StarSVG } from '../SVG-Icons';
import Watchlist from '../Watchlist.jsx';
import CurrentcyFormatter from '../../utils/CurrencyFormatter';

const WatchList = ({ coins, user }) => {
   return (
      <Layout>
         {/* Watchlist */}
         {coins.length !== 0 && (
            <WishlistWrapper>
               {/* Section title */}
               <p css={[tw`flex items-center space-x-5`]} className='bodyBold'>
                  <span>Watchlist</span> <StarSVG />
               </p>

               {/* WatchList */}
               <Wishlist>
                  {coins.map(({ id, name, symbol, current_price, image }) => {
                     const FormattedPrice = CurrentcyFormatter(current_price);
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
                  })}
               </Wishlist>
            </WishlistWrapper>
         )}
      </Layout>
   );
};

// Tailwind Styles
const WishlistWrapper = tw.div`space-y-8 lg:(mb-14)`;
const Wishlist = tw.div`grid grid-cols-5 gap-6`;
const CoinWrapper = tw.div`bg-white rounded-[20px] overflow-hidden hover:(shadow-lg) transition-shadow duration-300`;
export default WatchList;
