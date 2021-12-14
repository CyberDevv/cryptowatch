import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';

import SigninModal from './SignInModal.jsx';
import SignupModal from './SignupModal.jsx';
import { Logo, SearchSVG } from '../SVG-Icons';

const NavBar = ({ user }) => {
   const [signUpOpened, setSignUpOpened] = useState(false);
   const [signInOpened, setSignInOpened] = useState(false);

   const handleClickOpen = () => {
      setSignUpOpened(true);
   };
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
            <InputWrapper>
               <SearchSVG />
               <Input type='text' placeholder='Search' />
            </InputWrapper>

            {/* Buttons */}

            <Stack spacing={3} direction='row'>
               {/* sign in */}
               {!user && (
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
               {!user && (
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

export default NavBar;
