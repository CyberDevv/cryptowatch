import tw from 'twin.macro';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { StarSVG } from './SVG-Icons';

const Watchlist = ({ name, symbol, formattedPrice }) => {
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

         <Price>{formattedPrice}</Price>
      </CoinWrapper>
   );
};

// Tailwind styles
const CoinWrapper = tw.div`bg-white rounded-[20px] px-5 py-4 `;
const CoinName = tw.p`text-[18px] text-dark-darker leading-[28px]`;
const CoinABBR = tw.p`capitalize text-[#505780] text-[14px] leading-[17px] tracking-[-0.025em]`;
const Price = tw.p`text-[24px] leading-[29px] tracking-[-0.025em] text-dark-darker mb-2`;

export default Watchlist;
