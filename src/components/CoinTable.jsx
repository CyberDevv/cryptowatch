/* eslint-disable @next/next/no-img-element */
import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Avatar, Button, Checkbox, IconButton } from '@mui/material';

import Sparkline from './Sparkline.jsx';
import CurrencyFormatter from '../utils/CurrencyFormatter.js';
import { StarOutlinedSVG, StarSVG } from './SVG-Icons';

const handleAddToWatchList = (id) => {
   console.log(`Add to watchlist ${id}`);
};

const CoinTable = ({ coins }) => {
   const router = useRouter();
   const { page } = router.query;

   const watchListS = useSelector((state) => state.watchList);

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
         </TableHeader>

         <TableBodyWrapper>
            {coins.map(
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
                     spackline_7d,
                  },
                  index
               ) => {
                  const forImageUrlToSparkline = image.split('/')[5];

                  const FormattedCurrentPrice =
                     CurrencyFormatter(current_price);
                  return (
                     <TableBody key={id}>
                        {/* add to watchlist button */}
                        <Checkbox
                           checked={watchListS.some(
                              (coin) => coin.coinId === id
                           )}
                           onClick={() => handleAddToWatchList(id)}
                           icon={<StarOutlinedSVG />}
                           checkedIcon={<StarSVG />}
                        />

                        {/* S/N */}
                        <TableBodyText>{index + 1}</TableBodyText>

                        {/* Currency */}
                        <Link href={`/coins/${id}`}>
                           <a>
                              <div css={[tw`flex items-center space-x-4`]}>
                                 <Avatar
                                    sx={{
                                       width: '32px',
                                       height: '32px',
                                       bgcolor: 'transparent',
                                    }}
                                 >
                                    <Image
                                       src={image}
                                       alt={name}
                                       layout='fill'
                                    />
                                 </Avatar>
                                 <TableBodyText>
                                    {`${name} ${symbol.toUpperCase()}`}
                                 </TableBodyText>
                              </div>
                           </a>
                        </Link>

                        {/* price*/}
                        <TableBodyText>{FormattedCurrentPrice}</TableBodyText>

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
                           {parseFloat(price_change_percentage_24h).toFixed(1)}%
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
                        {/* <Sparkline price={spackline_7d} /> */}
                        <img
                           width='80%'
                           alt={name}
                           data-src={`https://www.coingecko.com/coins/${forImageUrlToSparkline}/sparkline`}
                           data-srcset={`https://www.coingecko.com/coins/${forImageUrlToSparkline}/sparkline 1x`}
                           src={`https://www.coingecko.com/coins/${forImageUrlToSparkline}/sparkline`}
                           srcSet={`https://www.coingecko.com/coins/${forImageUrlToSparkline}/sparkline 1x`}
                         />
                     </TableBody>
                  );
               }
            )}
         </TableBodyWrapper>

         <ButtonWrapper>
            <LinkButton
               disabled={
                  parseInt(page) === 1 || page === undefined ? true : false
               }
            >
               <Link href={`?page=${Number(page) - 1}`}>
                  <a>Previous</a>
               </Link>
            </LinkButton>

            <LinkButton>
               <Link
                  href={`?${
                     page === undefined ? 'page=2' : `page=${Number(page) + 1}`
                  }`}
               >
                  <a>Next</a>
               </Link>
            </LinkButton>
         </ButtonWrapper>
      </TableWrapper>
   );
};

// tailwind styles
const TableWrapper = tw.div`divide-y-2 space-y-2`;
const TableGrid = tw.ul`grid justify-items-start divide-dark-gray items-center grid-template-columns[40px 0.3fr 2fr 1fr 0.7fr 0.7fr 0.7fr 1fr ]`;
const TableHeader = tw(TableGrid)``;
const TableHeaderText = tw.p`text-[14px] text-dark-black leading-[17px]`;
const TableBodyWrapper = tw.div`py-3.5 space-y-9`;
const TableBody = tw(TableGrid)`transition-colors duration-300 hover:(bg-gray-100)`;
const TableBodyText = tw.p`text-[14px] text-black leading-[17px]`;
const ButtonWrapper = tw.div`flex items-center justify-center space-x-10 text-gray-500 py-10 `;
const LinkButton = tw(Button)`text-dark-black text-transform[none]`;

export default CoinTable;
