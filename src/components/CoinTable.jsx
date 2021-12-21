import tw from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Button, IconButton } from '@mui/material';

import Sparkline from './Sparkline.jsx';
import { StarOutlinedSVG, HamburgerSVG } from './SVG-Icons';
import CurrencyFormatter from '../utils/CurrencyFormatter.js';
import { useRouter } from 'next/router';

const CoinTable = ({ coins }) => {
   const router = useRouter();
   const { page } = router.query;

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
                           <Link href={`coins/${id}`}>
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

         <ButtonWrapper>
            <LinkButton disabled={parseInt(page) === 1 ? true : false}>
               <Link href={`?page=${+page - 1}`}>
                  <a>Previous</a>
               </Link>
            </LinkButton>

            <LinkButton>
               <Link
                  href={`?${
                     page === undefined ? 'page=2' : `page=${+page + 1}`
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
const TableGrid = tw.ul`grid justify-items-start divide-dark-gray items-center grid-template-columns[40px 0.3fr 2fr 1fr 0.7fr 0.7fr 0.7fr 1fr 0.2fr ]`;
const TableHeader = tw(TableGrid)``;
const TableHeaderText = tw.p`text-[14px] text-dark-black leading-[17px]`;
const TableBodyWrapper = tw.div`py-3.5 space-y-9`;
const TableBody = tw(TableGrid)``;
const TableBodyText = tw.p`text-[14px] text-black leading-[17px]`;
const ButtonWrapper = tw.div`flex items-center justify-center space-x-10 text-gray-500 py-10 `;
const LinkButton = tw(Button)`text-dark-black text-transform[none]`;

export default CoinTable;
