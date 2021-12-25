import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
   Avatar,
   Breadcrumbs,
   Button,
   Dialog,
   DialogActions,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Stack,
   Typography,
   MenuItem,
   FormControl,
   Select,
   TextField,
   InputAdornment,
   Chip,
} from '@mui/material';

import Layout from '../Layout';
import { CloseSVG, WhiteStarSVG } from '../SVG-Icons';
import CoinGraph from '../CoinGraph.jsx';
import CurrentcyFormatter from '../../utils/CurrencyFormatter';
import { styled } from '@mui/system';
import {useRouter} from 'next/router';

const CurrencyComponent = ({ res, sevenDres }) => {
   const {isFallback} = useRouter();
   
   const [priceAlertModalOpened, setPriceAlertModalOpened] = useState(false);
   const [AmountAlertk, setAmountAlert] = useState('');

   const handleSetAlert = (e) => {
      e.preventDefault();

      setPriceAlertModalOpened(true);

      // Your code should be in here
   };

   const handleAddToWatchlist = (e) => {
      e.preventDefault();

      setPriceAlertModalOpened;

      // Your code should be in here
   };

   const handlePricePercentSetters = (percent) => {
      let currentPrice = res.market_data.current_price.usd;

      if (percent < 0) {
         let percentage = percent / 100;
         let amount = currentPrice * percentage;
         setAmountAlert(parseFloat(Math.abs(amount)).toFixed(2));
      } else {
         let percentage = percent / 100 + 1;
         let amount = currentPrice * percentage;
         setAmountAlert(parseFloat(Math.abs(amount)).toFixed(2));
      }
   };

   if (isFallback) {
      return (
         <Layout>
            <div tw="text-center">
               <div tw="text-5xl font-bold">Loading...</div>
            </div>
         </Layout>
      );
   }

   const {
      name,
      image,
      market_data: {
         current_price,
         high_24h,
         low_24h,
         price_change_percentage_24h,
      },
   } = res;

   const HighLowPercent =
      ((current_price.usd - low_24h.usd) / (high_24h.usd - low_24h.usd)) * 100;

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
                        <Image src={image.small} layout='fill' alt={name} />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                     primary={
                        <>
                           <CoinPrice>
                              {CurrentcyFormatter(current_price.usd)}
                              <Chip sx= {{marginLeft: '16px', borderRadius: '10px'}} label={`${price_change_percentage_24h.toFixed(1)}%`} />
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

            {/* 24 hours volume */}
            <div css={[tw`space-y-8 `]}>
               <VolumeTitle className='body'>24H Volume</VolumeTitle>

               <div css={[tw`flex space-x-20`]}>
                  {/* High */}
                  <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>High</VolumeText>
                     <div>
                        <CoinPrice>
                           {CurrentcyFormatter(high_24h.usd)}
                        </CoinPrice>
                        <p>
                           <span>{}</span>
                        </p>
                     </div>
                  </div>

                  {/* Low */}
                  <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>Low</VolumeText>
                     <CoinPrice>{CurrentcyFormatter(low_24h.usd)}</CoinPrice>
                  </div>
               </div>

               <div
                  css={[
                     tw`w-full h-2 relative bg-gradient-to-r from-green-400 to-red-400 rounded-full`,
                  ]}
               >
                  <div
                     css={[tw`h-4 bg-blue-500 w-2 absolute top-0`]}
                     style={{ left: `${HighLowPercent}%` }}
                  ></div>
               </div>
            </div>

            {/* 7 days volume */}
            {/* <div css={[tw`space-y-8 `]}>
               <VolumeTitle className='body'>24H Volume</VolumeTitle>

               <div css={[tw`flex space-x-20`]}> */}
            {/* High */}
            {/* <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>High</VolumeText>
                     <div>
                        <CoinPrice>
                           {CurrentcyFormatter(high_24h.usd)}
                        </CoinPrice>
                        <p>
                           <span>{}</span>
                        </p>
                     </div>
                  </div> */}

            {/* Low */}
            {/* <div css={[tw`space-y-8`]}>
                     <VolumeText className='small'>Low</VolumeText>
                     <CoinPrice>{CurrentcyFormatter(low_24h.usd)}</CoinPrice>
                  </div>
               </div>
            </div> */}
         </CoinDashboard>

         <CoinGraph sevenDres={sevenDres} />

         {/* price alert modal */}
         <Dialog
            maxWidth='md'
            onClose={() => setPriceAlertModalOpened(false)}
            open={priceAlertModalOpened}
            sx={{ textAlign: 'center' }}
         >
            <div css={[tw`p-7 pt-[58px]`]}>
               <h6 css={[tw`text-dark-black letter-spacing[0]`]}>
                  Add Price Alert
               </h6>
               <Description className='body'>
                  When the price hits the target price, an alert will be sent to
                  your notifications.
               </Description>

               {/* predefined prices */}
               <Stack direction='row' spacing='48px'>
                  <Stack direction='row' spacing='8px'>
                     <PreDefinedPriceButton
                        onClick={() => handlePricePercentSetters(-50)}
                     >
                        -50%
                     </PreDefinedPriceButton>
                     <PreDefinedPriceButton
                        onClick={() => handlePricePercentSetters(-20)}
                     >
                        -20%
                     </PreDefinedPriceButton>
                     <PreDefinedPriceButton
                        onClick={() => handlePricePercentSetters(-10)}
                     >
                        -10%
                     </PreDefinedPriceButton>
                     <PreDefinedPriceButton
                        onClick={() => handlePricePercentSetters(-5)}
                     >
                        -5%
                     </PreDefinedPriceButton>
                  </Stack>
                  <Stack direction='row' spacing='8px'>
                     <ButtonGreen onClick={() => handlePricePercentSetters(5)}>
                        5%
                     </ButtonGreen>
                     <ButtonGreen onClick={() => handlePricePercentSetters(10)}>
                        10%
                     </ButtonGreen>
                     <ButtonGreen onClick={() => handlePricePercentSetters(20)}>
                        20%
                     </ButtonGreen>
                     <ButtonGreen onClick={() => handlePricePercentSetters(50)}>
                        50%
                     </ButtonGreen>
                  </Stack>
               </Stack>

               {/* input section */}
               <Stack
                  direction='row'
                  justifyContent='center'
                  spacing='8px'
                  sx={{ marginTop: '60px' }}
               >
                  <FormControl>
                     <Select
                        autoWidth
                        defaultValue={1}
                        // onChange={handleChange}
                        displayEmpty
                        size='medium'
                        sx={{
                           color: '#666666',
                        }}
                     >
                        <MenuItem value={1}>1BTC</MenuItem>
                        <MenuItem value={1.5}>1.5BTC</MenuItem>
                        <MenuItem value={2}>2BTC</MenuItem>
                        <MenuItem value={2.5}>2.5BTC</MenuItem>
                        <MenuItem value={3}>3BTC</MenuItem>
                     </Select>
                  </FormControl>

                  {/* A;mount */}
                  <TextField
                     value={AmountAlertk}
                     onChange={(e) => setAmountAlert(e.target.value)}
                     sx={{ m: 1, width: '25ch' }}
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position='start'>$</InputAdornment>
                        ),
                     }}
                  />

                  {/* currency */}
                  <FormControl>
                     <Select
                        autoWidth
                        defaultValue={1}
                        // onChange={handleChange}
                        displayEmpty
                        size='medium'
                        sx={{
                           color: '#666666',
                        }}
                     >
                        <MenuItem value={1}>USD</MenuItem>
                        <MenuItem value={2}>EUR</MenuItem>
                        <MenuItem value={4}>GBP</MenuItem>
                        <MenuItem value={3}>NGN</MenuItem>
                     </Select>
                  </FormControl>
               </Stack>

               <Description>
                  Current BTC Price: {CurrentcyFormatter(current_price.usd)}
               </Description>

               <Button
                  sx={{
                     paddingX: '24px',
                     paddingY: '12px',
                     fontSize: '14px',
                     fontWeight: 'bold',
                     textTransform: 'none',
                     borderRadius: '8px',
                     boxShadow: 'none',
                  }}
                  variant='contained'
               >
                  Save
               </Button>

               {/* Close button */}
               <DialogActions
                  sx={{
                     padding: 0,
                  }}
               >
                  <Button
                     sx={{
                        position: 'absolute',
                        borderRadius: '999px',
                        height: '25px',
                        minWidth: 25,
                        right: 26,
                        top: 26,
                     }}
                     onClick={() => setPriceAlertModalOpened(false)}
                  >
                     <CloseSVG />
                  </Button>

                  <Button
                     sx={{
                        position: 'absolute',
                        borderRadius: '999px',
                        height: '25px',
                        minWidth: 25,
                        right: 26,
                        bottom: 35,
                     }}
                     onClick={() => setPriceAlertModalOpened(false)}
                  >
                     <Link href='/priceAlerts'>
                        <a>View all</a>
                     </Link>
                  </Button>
               </DialogActions>
            </div>
         </Dialog>
      </Layout>
   );
};

const PreDefinedPriceButton = styled(Button)({
   color: 'white',
   backgroundColor: '#E52F15',
   padding: '6px',
   fontSize: '12px',
   transition: 'filter 0.2s ease-in',
   '&:hover': {
      backgroundColor: '#E52F15',
      filter: 'brightness(90%)',
   },
});

const ButtonGreen = styled(PreDefinedPriceButton)({
   backgroundColor: '#00D578',
   '&:hover': {
      backgroundColor: '#00D578',
      filter: 'brightness(90%)',
   },
});

// Tailwind Styles
const CoinDashboard = tw.div`bg-white px-8 py-9 mt-8 flex justify-between`;
const CoinName = tw.p`uppercase text-dark-gray`;
const CoinPrice = tw.p`text-[24px] text-dark-darker`;
const ButtonWrapper = tw.div`space-x-5 mt-7`;
const VolumeTitle = tw.p`text-dark-gray`;
const VolumeText = tw.p`text-dark-black`;
const Description = tw.p`text-dark-gray mt-3 mb-8`;
export default CurrencyComponent;
