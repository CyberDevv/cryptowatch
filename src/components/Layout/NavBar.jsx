import tw from 'twin.macro';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Avatar, Button, ListItemText, Stack } from '@mui/material';

import SigninModal from './SignInModal.jsx';
import SignupModal from './SignupModal.jsx';
import { Logo, SearchSVG, SpinnerSVG } from '../SVG-Icons';

const NavBar = ({ signInOpened, setSignInOpened }) => {
   const [signUpOpened, setSignUpOpened] = useState(false);
   const [coinss, setCoins] = useState('');
   const [searchOpened, setSearchOpeend] = useState(false);

   const navBar = useRef();
   const searchPanel = useRef();

   // Gets the user from the store
   const user = useSelector((state) => state.user.value);
   const coins = useSelector((state) => state.coinsWithNoData.coinsWithNoData);
   const coinsLoading = useSelector((state) => state.coinsWithNoData.loading);

   useEffect(() => {
      const navBarr = navBar.current;
      window.addEventListener('scroll', function () {
         navBarr.classList.toggle('navScrolled', window.scrollY > 0);
      });
   }, [navBar]);

   const handleOnBlur = (e) => {
      const searchPanelRef = searchPanel.current;
      if (!searchPanelRef.contains(e.target)) {
         setSearchOpeend(false);
      }
   };

   useEffect(() => {
      if (setSearchOpeend) {
         document.addEventListener('mousedown', handleOnBlur);
      }

      return () => {
         document.removeEventListener('mousedown', handleOnBlur);
      };
   }, [setSearchOpeend]);

   return (
      <div css={[tw`relative h-12 lg:h-32`]}>
         <Nav className='navBar' ref={navBar}>
            <NavDiv>
               {/* Logo */}
               <Link href='/' passHref>
                  <LogoAnchor>
                     <Logo />
                  </LogoAnchor>
               </Link>

               <div css={[tw`flex justify-between items-center w-full`]}>
                  {/* Search input */}
                  <div css={[tw`relative`]} ref={searchPanel}>
                     <InputWrapper>
                        <SearchSVG />
                        <Input
                           type='text'
                           placeholder='Search'
                           value={coinss}
                           onChange={(e) => setCoins(e.target.value)}
                           onFocus={() => setSearchOpeend(true)}
                        />
                        {coinsLoading && coins.length === 0 && <SpinnerSVG />}
                     </InputWrapper>

                     {/* Search Pannel */}
                     {coinss.length !== 0 && searchOpened && (
                        <SearchPanel>
                           {coins
                              .filter((coinsss) => {
                                 if (coinsss.length === 0) {
                                    return { name: 'None' };
                                 } else if (
                                    coinsss.name
                                       .toLowerCase()
                                       .includes(coinss.toLowerCase())
                                 ) {
                                    return coinsss;
                                 }
                              })
                              .map(({ name, id, symbol }) => {
                                 return (
                                    <li
                                       key={id}
                                       css={[tw`px-4 py-3  hover:bg-gray-100`]}
                                    >
                                       <Link href={`/coins/${id}`} passHref>
                                          <CoinAnchor
                                             onClick={() => {
                                                setSearchOpeend(false);
                                                setCoins('');
                                             }}
                                          >
                                             <div
                                                css={[
                                                   tw`flex items-center space-x-2`,
                                                ]}
                                             >
                                                <ListItemText primary={name} />
                                             </div>
                                             <p
                                                css={[
                                                   tw`uppercase text-dark-gray`,
                                                ]}
                                             >
                                                {symbol}
                                             </p>
                                          </CoinAnchor>
                                       </Link>
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
            </NavDiv>
         </Nav>
      </div>
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
const Nav = tw.nav`mb-16 flex items-center px-0 pr-4 xl:(px-10) pt-5 transition-all duration-300`;
const NavDiv = tw.div`max-w-[1920px] mx-auto w-full flex items-center space-x-[40px] lg:(space-x-[55px]) xl:(space-x-[75px]) 2xl:(space-x-[115px]) transition-all duration-300`;
const LogoAnchor = tw.a`ml-4`;
const InputWrapper = tw.div`bg-[#EBF2FA] space-x-3 py-3 px-4 rounded-full flex items-center lg:(w-[350px])`;
const Input = tw.input`bg-transparent text-dark-black focus:(outline-none) text-[13px] w-full`;
const SearchPanel = tw.ul`h-96 overflow-y-scroll divide-y-2 divide-gray-200 overflow-x-hidden absolute w-[350px] max-w-[350px] bg-white shadow-xl z-40`;
const CoinAnchor = tw.a`flex items-center cursor-pointer justify-between w-full`;

export default NavBar;
