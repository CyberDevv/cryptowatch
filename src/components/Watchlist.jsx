import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import {
   Avatar,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from '@mui/material';

import { StarSVG } from './SVG-Icons';

const Watchlist = ({ id, name, symbol, formattedPrice, image }) => {
   return (
      <div css={[tw`cursor-pointer px-3 xl:px-5 py-4 h-full`]}>
         <Link href={`coins/${id}`}>
            <a>
               <div css={[tw`text-right mb-1`]}>
                  <StarSVG />
               </div>

               <ListItem
                  sx={{
                     padding: 0,
                     marginBottom: { xs: 0, lg: '10px' },
                     flexDirection: { xs: 'column', xl: 'row' },
                     textAlign: { xs: 'center', xl: 'left' },
                  }}
               >
                  <ListItemAvatar>
                     <Avatar
                        sx={{
                           bgcolor: 'transparent',
                           marginX: { xs: 'auto', xl: '0' },
                           height: { xs: '30px', xl: '40px' },
                           width: { xs: '30px', xl: '40px' },
                        }}
                     >
                        <Image src={image} alt={name} layout='fill' />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                     primary={<CoinName>{name}</CoinName>}
                     secondary={<CoinABBR>{symbol}</CoinABBR>}
                  />
               </ListItem>

               <Price>{formattedPrice}</Price>
            </a>
         </Link>
      </div>
   );
};

// Tailwind styles
const CoinName = tw.p` text-[14px] lg:(text-[18px]) text-dark-darker leading-[28px]`;
const CoinABBR = tw.p`uppercase text-[#505780] text-xs lg:(text-[14px] leading-[17px] tracking-[-0.025em])`;
const Price = tw.p`text-[14px] text-center lg:(text-xl) xl:(text-[24px] leading-[29px] tracking-[-0.025em] text-left) text-dark-darker xl:mb-2`;

export default Watchlist;
