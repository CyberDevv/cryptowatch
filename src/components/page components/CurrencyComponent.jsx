import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import {
   Avatar,
   Breadcrumbs,
   Button,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from '@mui/material';

import Layout from '../Layout';
import { WhiteStarSVG } from '../SVG-Icons';
import CoinGraph from '../CoinGraph.jsx'
import CurrentcyFormatter from '../../utils/CurrencyFormatter';

const CurrencyComponent = ({ coin, sevenDres }) => {
   const handleSetAlert = (e) => {
      e.preventDefault();

      // Your code should be in here
   };

   const handleAddToWatchlist = (e) => {
      e.preventDefault();

      // Your code should be in here
   };

   const {
      name,
      image,
      market_data: { current_price, high_24h, low_24h },
   } = coin;
   return (
      <Layout>
         <Breadcrumbs separator='>>' aria-label='breadcrumb'>
            <Link href='/watchList'>
               <a>Watchlist</a>
            </Link>
            <Typography color='text.primary'>{name}</Typography>
         </Breadcrumbs>

         {/* Coin dashboard */}
         <CoinDashboard>
            <div>
               <CoinName className='body'>{name}</CoinName>

               <ListItem sx={{ padding: 0, marginTop: '24px' }}>
                  <ListItemAvatar>
                     <Avatar sx={{ bgcolor: 'transparent' }}>
                        <Image src={image.small} layout='fill' />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                     primary={
                        <>
                           <CoinPrice>
                              {CurrentcyFormatter(current_price.usd)}
                           </CoinPrice>
                        </>
                     }
                     secondary='Current Price'
                  />
               </ListItem>

               <ButtonWrapper>
                  <Button
                     variant='contained'
                     sx={{
                        bgcolor: '#4C6FFF',
                        textTransform: 'capitalize',
                        boxShadow: 'none',
                     }}
                     onClick={handleSetAlert}
                  >
                     Set Price Alert
                  </Button>

                  <Button
                     variant='contained'
                     sx={{
                        bgcolor: '#F6ACA2',
                        textTransform: 'none',
                        boxShadow: 'none',
                        '&:hover': {
                           bgcolor: '#f59285',
                        },
                     }}
                     endIcon={<WhiteStarSVG />}
                     onClick={handleAddToWatchlist}
                  >
                     Add to Watchlist
                  </Button>
               </ButtonWrapper>
            </div>

            <div css={[tw`space-y-8 `]}>
               <VolumeTitle className='body'>24H Volume</VolumeTitle>

               <div css={[tw`flex space-x-[100px]`]}>
                  {/* High */}
                  <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>High</VolumeText>
                     <CoinPrice>{CurrentcyFormatter(high_24h.usd)}</CoinPrice>
                  </div>

                  {/* Low */}
                  <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>Low</VolumeText>
                     <CoinPrice>{CurrentcyFormatter(low_24h.usd)}</CoinPrice>
                  </div>
               </div>
            </div>
         </CoinDashboard>

         <CoinGraph sevenDres={sevenDres} />
      </Layout>
   );
};

// Tailwind Styles
const CoinDashboard = tw.div`bg-white px-8 py-9 mt-8 flex justify-between`;
const CoinName = tw.p`uppercase text-dark-gray`;
const CoinPrice = tw.p`text-[24px] text-dark-darker`;
const ButtonWrapper = tw.div`space-x-5 mt-7`;
const VolumeTitle = tw.p`text-dark-gray`;
const VolumeText = tw.p`text-dark-black`;

export default CurrencyComponent;
