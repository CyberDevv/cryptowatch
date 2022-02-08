import clsx from 'clsx';
import tw from 'twin.macro';
import { styled } from '@mui/system';
import { Avatar, IconButton, Switch } from '@mui/material';
import { useSwitch } from '@mui/base/SwitchUnstyled';

import Layout from '../Layout';
import { StarOutlinedSVG, HamburgerSVG } from '../SVG-Icons';
import CurrencyFormatter from '../../utils/CurrencyFormatter.js';

const BasicSwitchRoot = styled('span')`
   font-size: 0;
   position: relative;
   display: inline-block;
   width: 32px;
   height: 20px;
   background: #b3c3d3;
   border-radius: 10px;
   margin: 10px;
   cursor: pointer;

   &.Switch-disabled {
      opacity: 0.4;
      cursor: not-allowed;
   }

   &.Switch-checked {
      background: #007fff;
   }
`;

const BasicSwitchInput = styled('input')`
   cursor: inherit;
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   opacity: 0;
   z-index: 1;
   margin: 0;
`;

const BasicSwitchThumb = styled('span')`
   display: block;
   width: 14px;
   height: 14px;
   top: 3px;
   left: 3px;
   border-radius: 16px;
   background-color: #fff;
   position: relative;
   transition: all 200ms ease;

   &.Switch-focusVisible {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
   }

   &.Switch-checked {
      left: 14px;
      top: 3px;
      background-color: #fff;
   }
`;

function BasicSwitch(props) {
   const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

   const stateClasses = {
      'Switch-checked': checked,
      'Switch-disabled': disabled,
      'Switch-focusVisible': focusVisible,
   };

   return (
      <BasicSwitchRoot className={clsx(stateClasses)}>
         <BasicSwitchThumb className={clsx(stateClasses)} />
         <BasicSwitchInput {...getInputProps()} aria-label='Demo switch' />
      </BasicSwitchRoot>
   );
}

const PriceAlert = () => {
   return (
      <Layout>
         {/* Section title */}
         <p className='bodyBold' css={[tw`pb-2`]}>Price Alerts</p>
         <TableWrapper>
            <TableHeader>
               {/* Star */}
               <IconButton>
                  <StarOutlinedSVG />
               </IconButton>
               <TableHeaderText>#</TableHeaderText>
               <TableHeaderText>Currency</TableHeaderText>
               <TableHeaderText>Current Price</TableHeaderText>
               <TableHeaderText>High</TableHeaderText>
               <TableHeaderText>Low</TableHeaderText>
               <TableHeaderText>Notification</TableHeaderText>
            </TableHeader>

            <TableBodyWrapper>
               {coinsDetails.map(
                  (
                     {
                        id,
                        name,
                        current_price,
                        high,
                        low,
                        symbol,
                        image,
                        receiveNotification,
                     },
                     index
                  ) => {
                     const Formattedcurrent_price =
                        CurrencyFormatter(current_price);
                     return (
                        <TableBody key={id}>
                           {/* add to watchlist button */}
                           <IconButton>
                              <StarOutlinedSVG />
                           </IconButton>

                           {/* S/N */}
                           <TableBodyText>{index + 1}</TableBodyText>

                           {/* Currency */}
                           <div css={[tw`flex items-center space-x-4`]}>
                              <Avatar
                                 sx={{
                                    height: { xs: '22px', xl: '32px' },
                                    width: { xs: '22px', xl: '32px' },
                                    // bgcolor: 'transparent',
                                 }}
                              >
                                 {/* <Image src={image} alt={name} layout='fill' /> */}
                              </Avatar>
                              <TableBodyText>
                                 {`${name} ${symbol.toUpperCase()}`}
                              </TableBodyText>
                           </div>

                           {/* price*/}
                           <TableBodyText>
                              {Formattedcurrent_price}
                           </TableBodyText>

                           {/* high */}
                           <TableBodyText>
                              {high ? CurrencyFormatter(high) : '-'}
                           </TableBodyText>

                           {/* low */}
                           <TableBodyText>
                              {low ? CurrencyFormatter(low) : '-'}
                           </TableBodyText>

                           {/* Enable notification */}
                           <BasicSwitch
                              checked={receiveNotification}
                              // onChange={ }
                              defaultChecked
                           />

                           {/* Hamburger */}
                           <IconButton>
                              <HamburgerSVG />
                           </IconButton>
                        </TableBody>
                     );
                  }
               )}
            </TableBodyWrapper>
         </TableWrapper>
      </Layout>
   );
};

const coinsDetails = [
   {
      id: 1,
      name: 'Bitcoin',
      symbol: 'btc',
      current_price: 56000,
      low: 10000,
      high: 60000,
      receiveNotification: true,
   },
   {
      id: 2,
      name: 'Ethereum',
      symbol: 'Eth',
      current_price: 6000,
      low: 10000,
      receiveNotification: true,
   },
   {
      id: 3,
      name: 'NEO',
      symbol: 'NEO',
      current_price: 0.8,
      low: 10000,
      receiveNotification: false,
   },
   {
      id: 4,
      name: 'Bicoincash',
      symbol: 'bsc',
      current_price: 56000,
      low: 10000,
      receiveNotification: true,
   },
];

// tailwind styles
const TableWrapper = tw.div`divide-y-2 space-y-2 mt-2 lg:mt-8 overflow-x-scroll`;
const TableGrid = tw.ul`min-w-[788px] grid justify-items-start divide-dark-gray items-center grid-template-columns[50px 0.3fr 2.5fr 1.2fr 1.2fr 1.2fr 1.2fr 0.7fr 0.2fr ]`;
const TableHeader = tw(TableGrid)``;
const TableHeaderText = tw.p`text-[14px] text-dark-black leading-[17px]`;
const TableBodyWrapper = tw.div`py-3.5 space-y-9`;
const TableBody = tw(TableGrid)``;
const TableBodyText = tw.p`text-[14px] text-black leading-[17px]`;

export default PriceAlert;
