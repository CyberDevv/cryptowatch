import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Avatar, Button, ListItemText, Stack } from '@mui/material';

import SigninModal from './SignInModal.jsx';
import SignupModal from './SignupModal.jsx';
import { Logo, SearchSVG } from '../SVG-Icons';

const NavBar = () => {
   const [signUpOpened, setSignUpOpened] = useState(false);
   const [signInOpened, setSignInOpened] = useState(false);
   const [coinss, setCoins] = useState('');
   const [searchOpened, setSearchOpeend] = useState(false);

   // Gets the user from the store
   const user = useSelector((state) => state.user.value);
   const coins = useSelector((state) => state.coins);

   return (
      <Nav>
         {/* Logo */}
         <Link href='/' passHref>
            <LogoAnchor>
               <Logo />
            </LogoAnchor>
         </Link>

         <div css={[tw`flex justify-between items-center w-full`]}>
            {/* Search input */}
            <div css={[tw`relative`]}>
               <InputWrapper>
                  <SearchSVG />
                  <Input
                     type='text'
                     placeholder='Search'
                     value={coinss}
                     onChange={(e) => setCoins(e.target.value)}
                     onFocus={() => setSearchOpeend(true)}
                     onBlur={() => setSearchOpeend(false)}
                  />
               </InputWrapper>

               {/* Search Pannel */}
               {searchOpened && (
                  <SearchPanel>
                     {coins
                        .filter((coinsss) => {
                           if (coinss === '') {
                              return coinsss;
                           } else if (
                              coinsss.name
                                 .toLowerCase()
                                 .includes(coinss.toLowerCase())
                           ) {
                              return coinsss;
                           }
                        })
                        .map(({ image, name, id, symbol }) => {
                           return (
                              <li
                                 key={id}
                                 css={[tw`px-4 py-3  hover:bg-gray-100`]}
                              >
                                 <Link href={`/coins/${id}`} passHref>
                                    <CoinAnchor>
                                       <div
                                          css={[
                                             tw`flex items-center space-x-2`,
                                          ]}
                                       >
                                          <Avatar
                                             sx={{ width: 24, height: 24 }}
                                             src={image}
                                             alt={name}
                                          ></Avatar>
                                          <ListItemText primary={name} />
                                       </div>
                                       <p css={[tw`uppercase text-dark-gray`]}>
                                          {symbol}
                                       </p>
                                    </CoinAnchor>
                                 </Link>
                                 {/* <Divider /> */}
                              </li>
                           );
                        })}
                  </SearchPanel>
               )}
            </div>

            {/* Buttons */}

            <Stack spacing={3} direction='row'>
               {/* sign in */}
               {!user.email && (
                  <NavButton
                     onClick={() => setSignInOpened(true)}
                     sx={{
                        bgcolor: '#EBF2FA',
                        color: '#4C6FFF',
                        paddingX: '24px',
                     }}
                  >
                     Sign in
                  </NavButton>
               )}

               {/* Sign up */}
               {!user.email && (
                  <NavButton
                     onClick={() => setSignUpOpened(true)}
                     sx={{ bgcolor: '#EBF2FA', color: '#4C6FFF' }}
                  >
                     Create an Account
                  </NavButton>
               )}
            </Stack>
         </div>

         {/* Sign in modal */}
         <SigninModal
            setSignInOpened={setSignInOpened}
            signInOpened={signInOpened}
         />

         {/* Sign in modal */}
         <SignupModal
            setSignUpOpened={setSignUpOpened}
            signUpOpened={signUpOpened}
         />
      </Nav>
   );
};

// Button styles
const NavButton = styled(Button)({
   textTransform: 'none',
   borderRadius: '999px',
   padding: '16px',
   fontSize: '14px',
   boxShadow: 'none',
});

// Tailwind styles
const Nav = tw.nav`mb-16 flex items-center lg:(mx-10) xl:(space-x-[115px])`;
const LogoAnchor = tw.a`ml-4`;
const InputWrapper = tw.div`bg-[#EBF2FA] space-x-3 py-3 px-4 rounded-full flex items-center lg:(w-[350px])`;
const Input = tw.input`bg-transparent text-dark-black focus:(outline-none) text-[13px] w-full`;
const SearchPanel = tw.ul`h-96 overflow-y-scroll divide-y-2 divide-gray-200 overflow-x-hidden absolute w-[350px] max-w-[350px] bg-white shadow-xl z-40`;
const CoinAnchor = tw.a`flex items-center cursor-pointer justify-between w-full`;

export default NavBar;
