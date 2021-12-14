import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { StarSVG } from './SVG-Icons';

const Watchlist = ({ id, name, symbol, formattedPrice, image }) => {
   return (
      <div css={[tw` cursor-pointer px-5 py-4 h-full`]}>
         <Link href={`coins/${id}`}>
            <a>
               <div css={[tw`text-right mb-1`]}>
                  <StarSVG />
               </div>

               <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                  <ListItemAvatar>
                     <Avatar sx={{ bgcolor: 'transparent' }}>
                        <Image src={image} layout='fill' />
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
            </a>
         </Link>
      </div>
   );
};

// Tailwind styles
const CoinName = tw.p`text-[18px] text-dark-darker leading-[28px]`;
const CoinABBR = tw.p`uppercase text-[#505780] text-[14px] leading-[17px] tracking-[-0.025em]`;
const Price = tw.p`text-[24px] leading-[29px] tracking-[-0.025em] text-dark-darker mb-2`;

export default Watchlist;
