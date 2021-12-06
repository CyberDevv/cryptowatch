import tw from 'twin.macro';
import Image from 'next/image';
import { Avatar, IconButton } from '@mui/material';

import Sparkline from './Sparkline.jsx';
import { StarOutlinedSVG, HamburgerSVG } from './SVG-Icons';
import CurrencyFormatter from '../utils/CurrencyFormatter.js';

const CoinTable = ({ coins }) => {
   return (
      <TableWrapper>
         <TableHeader>
            {/* Star */}
            <IconButton>
               <StarOutlinedSVG />
            </IconButton>
            <TableHeaderText>#</TableHeaderText>
            <TableHeaderText>Currency</TableHeaderText>
            <TableHeaderText>Current Price</TableHeaderText>
            <TableHeaderText>1hr</TableHeaderText>
            <TableHeaderText>24hr</TableHeaderText>
            <TableHeaderText>7d</TableHeaderText>
            <TableHeaderText>Last 7 days</TableHeaderText>
            <TableHeaderText></TableHeaderText>
         </TableHeader>

         <TableBodyWrapper>
            {coins
               .slice(0, 5)
               .map(
                  (
                     {
                        id,
                        name,
                        current_price,
                        price_change_percentage_24h,
                        price_change_percentage_1h_in_currency,
                        price_change_percentage_7d_in_currency,
                        symbol,
                        image,
                        sparkline_in_7d: { price },
                     },
                     index
                  ) => {
                     const FormattedCurrentPrice =
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
                                    width: '32px',
                                    height: '32px',
                                    bgcolor: 'transparent',
                                 }}
                              >
                                 <Image src={image} alt={name} layout='fill' />
                              </Avatar>
                              <TableBodyText>
                                 {`${name} ${symbol.toUpperCase()}`}
                              </TableBodyText>
                           </div>

                           {/* price*/}
                           <TableBodyText>
                              {FormattedCurrentPrice}
                           </TableBodyText>

                           {/* last 1h */}
                           <TableBodyText
                              css={[
                                 price_change_percentage_1h_in_currency < 0
                                    ? tw`text-[#E52F15]`
                                    : tw`text-[#66CB9F]`,
                              ]}
                           >
                              {parseFloat(
                                 price_change_percentage_1h_in_currency
                              ).toFixed(1)}
                              %
                           </TableBodyText>

                           {/* last 24hr */}
                           <TableBodyText
                              css={[
                                 price_change_percentage_24h < 0
                                    ? tw`text-[#E52F15]`
                                    : tw`text-[#66CB9F]`,
                              ]}
                           >
                              {parseFloat(price_change_percentage_24h).toFixed(
                                 1
                              )}
                              %
                           </TableBodyText>

                           {/* last 7d */}
                           <TableBodyText
                              css={[
                                 price_change_percentage_7d_in_currency < 0
                                    ? tw`text-[#E52F15]`
                                    : tw`text-[#66CB9F]`,
                              ]}
                           >
                              {parseFloat(
                                 price_change_percentage_7d_in_currency
                              ).toFixed(1)}
                              %
                           </TableBodyText>

                           {/* graph for last 7 days */}
                           <Sparkline price={price} />

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
   );
};

const coinsDetails = [
   {
      id: 1,
      currency: 'Bitcoin',
      symbol: 'btc',
      currentPrice: 56000,
      last24Hours: '+20',
      last7days: '+5',
      last1min: '+50',
      last7Days: [20, 49, 43, 84, 23, 21, 43],
   },
   {
      id: 2,
      currency: 'Ethereum',
      symbol: 'Eth',
      currentPrice: 6000,
      last24Hours: '+20',
      last7days: '+5',
      last1min: '+50',
      last7Days: [20, 49, 43, 84, 23, 21, 43],
   },
   {
      id: 3,
      currency: 'NEO',
      symbol: 'NEO',
      currentPrice: 0.8,
      last24Hours: '+20',
      last7days: '+5',
      last1min: '+50',
      last7Days: [20, 49, 43, 84, 23, 21, 43],
   },
   {
      id: 4,
      currency: 'Bicoincash',
      symbol: 'bsc',
      currentPrice: 56000,
      last24Hours: '+20',
      last7days: '+5',
      last1min: '+50',
      last7Days: [20, 49, 43, 84, 23, 21, 43],
   },
   {
      id: 5,
      currency: 'Litecoin',
      symbol: 'lte',
      currentPrice: 56000,
      last24Hours: '+20',
      last7days: '+5',
      last1min: '+50',
      last7Days: [20, 49, 43, 84, 23, 21, 43],
   },
];

// tailwind styles
const TableWrapper = tw.div`divide-y-2 space-y-2`;
const TableGrid = tw.ul`grid justify-items-start divide-dark-gray items-center grid-template-columns[40px 0.3fr 2fr 1fr 0.7fr 0.7fr 0.7fr 1fr 0.2fr ]`;
const TableHeader = tw(TableGrid)``;
const TableHeaderText = tw.p`text-[14px] text-dark-black leading-[17px]`;
const TableBodyWrapper = tw.div`py-3.5 space-y-9`;
const TableBody = tw(TableGrid)``;
const TableBodyText = tw.p`text-[14px] text-black leading-[17px]`;

export default CoinTable;
