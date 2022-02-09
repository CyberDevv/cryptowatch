import moment from 'moment';
import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
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
   Divider,
} from '@mui/material';

import Layout from '../Layout';
import CoinGraph from '../CoinGraph.jsx';
import CurrentcyFormatter from '../../utils/CurrencyFormatter';
import { CloseSVG, WhiteStarSVG, ArrowDownSVG, ArrowUpSVG } from '../SVG-Icons';

const CurrencyComponent = ({ res, sevenDres, oneMonthRes, oneDayRes }) => {
   const { isFallback } = useRouter();

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
            <div tw='text-center'>
               <div tw='text-5xl font-bold'>Loading...</div>
            </div>
         </Layout>
      );
   }

   const {
      name,
      image,
      current_price,
      high_24h,
      low_24h,
      price_change_percentage_24h,
      market_cap,
      total_volume,
      atl,
      ath,
      ath_date,
      atl_date,
      description,
   } = res;

   const HighLowPercent =
      ((current_price.usd - low_24h.usd) / (high_24h.usd - low_24h.usd)) * 100;

   const chipStyles = {
      marginLeft: '16px',
      borderRadius: '5px',
      padding: '4px',
      bgcolor: `${price_change_percentage_24h > 0 ? '#EBFBED' : '#FBEEEB'}`,
      color: `${price_change_percentage_24h > 0 ? '#00D578' : '#F55858'}`,
   };

   return (
      <Layout>
         <Breadcrumbs separator='>>' aria-label='breadcrumb'>
            <Link href='/'>
               <a>Coins</a>
            </Link>
            <Typography color='text.primary'>{name}</Typography>
         </Breadcrumbs>

         {/* Coin dashboard */}
         <CoinDashboard>
            <div
               css={[
                  tw`flex flex-col space-y-14 lg:(flex-row justify-between items-center space-y-0)`,
               ]}
            >
               <div>
                  <CoinName className='body'>{name}</CoinName>

                  <ListItem sx={{ padding: 0, marginTop: '24px' }}>
                     <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                           <Image src={image} layout='fill' alt={name} />
                        </Avatar>
                     </ListItemAvatar>
                     <ListItemText
                        primary={
                           <>
                              <CoinPrice>
                                 {CurrentcyFormatter(current_price.usd)}
                                 <Chip
                                    icon={
                                       price_change_percentage_24h > 0 ? (
                                          <ArrowUpSVG />
                                       ) : (
                                          <ArrowDownSVG />
                                       )
                                    }
                                    sx={chipStyles}
                                    size='small'
                                    label={`${price_change_percentage_24h.toFixed(
                                       1
                                    )}%`}
                                 />
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
               <div css={[tw`space-y-8 max-w-sm`]}>
                  <div css={[tw`space-y-8 `]}>
                     <VolumeTitle className='body'>24H Volume</VolumeTitle>

                     <div css={[tw`flex justify-between lg:space-x-40`]}>
                        {/* Low */}
                        <div css={[tw`space-y-4`]}>
                           <VolumeText className='small'>Low</VolumeText>
                           <CoinPrice>
                              {CurrentcyFormatter(low_24h.usd)}
                           </CoinPrice>
                        </div>

                        {/* High */}
                        <div css={[tw`space-y-4`]}>
                           <VolumeText className='small'>High</VolumeText>
                           <div>
                              <CoinPrice>
                                 {CurrentcyFormatter(high_24h.usd)}
                              </CoinPrice>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Range */}
                  <div
                     css={[
                        tw`w-full h-2 relative bg-gray-300 rounded-full overflow-hidden`,
                     ]}
                  >
                     <div
                        css={[
                           tw`h-full absolute top-0 bg-gray-600 rounded-full`,
                        ]}
                        style={{ width: `${HighLowPercent}%` }}
                     />
                  </div>
               </div>
            </div>

            {/* coins stats */}
            <StatsWrapper className='scrollHidden'>
               <EachStat>
                  <StatHeaderText className='bodyBold'>
                     Market Cap
                  </StatHeaderText>
                  <StatText>{CurrentcyFormatter(market_cap.usd)}</StatText>
               </EachStat>

               <Divider orientation='vertical' flexItem />

               <EachStat>
                  <StatHeaderText className='bodyBold'>
                     Trading Volume
                  </StatHeaderText>
                  <StatText>{CurrentcyFormatter(total_volume.usd)}</StatText>
               </EachStat>

               <Divider orientation='vertical' flexItem />

               <EachStat>
                  <StatHeaderText className='bodyBold'>
                     All-Time High
                  </StatHeaderText>
                  <StatText>{CurrentcyFormatter(ath.usd)}</StatText>
                  <SecondaryText className='small'>
                     {DateFormatter(ath_date.usd)}
                  </SecondaryText>
               </EachStat>

               <Divider orientation='vertical' flexItem />

               <EachStat>
                  <StatHeaderText className='bodyBold'>
                     All-Time Low
                  </StatHeaderText>
                  <StatText>{CurrentcyFormatter(atl.usd)}</StatText>
                  <SecondaryText className='small'>
                     {DateFormatter(atl_date.usd)}
                  </SecondaryText>
               </EachStat>
            </StatsWrapper>
         </CoinDashboard>

         <CoinGraph
            sevenDres={sevenDres}
            oneMonthRes={oneMonthRes}
            oneDayRes={oneDayRes}
         />

         {/* price alert modal */}
         <Dialog
            maxWidth='md'
            onClose={() => setPriceAlertModalOpened(false)}
            open={priceAlertModalOpened}
            sx={{ textAlign: 'center' }}
         >
            <div css={[tw`py-7 px-5 lg:py-7  pt-[58px]`]}>
               <h6 css={[tw`text-dark-black letter-spacing[0]`]}>
                  Add Price Alert
               </h6>
               <Description className='body'>
                  When the price hits the target price, an alert will be sent to
                  your notifications.
               </Description>

               {/* predefined prices */}
               <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:'15px',sm:'48px'}}>
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

const DateFormatter = (date) => {
   return (
      <>
         <span>
            {`${moment(date).utc().format('MMM DD, YYYY')} ( ${moment(
               date
            ).fromNow()} )`}
         </span>
      </>
   );
};

// Tailwind Styles
const CoinDashboard = tw.div`bg-white px-2 lg:px-8 py-9 mt-8 flex justify-between flex-col space-y-10`;
const CoinName = tw.p`uppercase text-dark-gray`;
const CoinPrice = tw.p`text-[20px] text-dark-darker sm:text-[24px]`;
const ButtonWrapper = tw.div`space-x-2 sm:space-x-5 mt-7`;
const VolumeTitle = tw.p`text-dark-gray`;
const VolumeText = tw.p`text-dark-black`;
const Description = tw.p`text-dark-gray mt-3 mb-8`;
const StatsWrapper = tw.div`overflow-x-scroll space-x-2 flex justify-between items-center`;
const EachStat = tw.div`py-8 min-w-[180px]`;
const StatHeaderText = tw.p`text-dark-black tracking-wider`;
const StatText = tw.p`text-dark-gray mt-2`;
const SecondaryText = tw.p`text-gray-300`;

export default CurrencyComponent;
