import tw from 'twin.macro';
import { Avatar, IconButton } from '@mui/material';

import { StarOutlinedSVG, HamburgerSVG } from './SVG-Icons';

const CoinTable = () => {
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
            <TableHeaderText>24hr</TableHeaderText>
            <TableHeaderText>7d</TableHeaderText>
            <TableHeaderText>1m</TableHeaderText>
            <TableHeaderText>Last 7 days</TableHeaderText>
            <TableHeaderText></TableHeaderText>
         </TableHeader>

         <TableBodyWrapper>
            {coinsDetails.map(
               ({
                  id,
                  currency,
                  currentPrice,
                  last24Hours,
                  last7days,
                  last1min,
                  last7Days,
                  symbol,
               }) => {
                  let formatter = new Intl.NumberFormat('en-US', {
                     style: 'currency',
                     currency: 'USD',
                  });

                  let FormattedCurrentPrice = formatter.format(currentPrice);
                  return (
                     <TableBody key={id}>
                        {/* add to watchlist button */}
                        <IconButton>
                           <StarOutlinedSVG />
                        </IconButton>

                        {/* id */}
                        <TableBodyText>{id}</TableBodyText>

                        {/* Currency */}
                        <div css={[tw`flex items-center space-x-4`]}>
                           <Avatar
                              alt='Remy Sharp'
                              src='/static/images/avatar/1.jpg'
                              sx={{ width: '32px', height: '32px' }}
                           />
                           <TableBodyText>
                              {`${currency} ${symbol.toUpperCase()}`}
                           </TableBodyText>
                        </div>

                        <TableBodyText>{FormattedCurrentPrice}</TableBodyText>
                        <TableBodyText>{last24Hours}</TableBodyText>
                        <TableBodyText>{last7days}</TableBodyText>
                        <TableBodyText>{last1min}</TableBodyText>
                        <TableBodyText>{last7Days}</TableBodyText>
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
