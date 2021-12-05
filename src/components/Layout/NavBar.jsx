import tw from 'twin.macro';
import Link from 'next/link';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Logo, SearchSVG } from '../SVG-Icons';

const NavBar = ({ user }) => {
   return (
      <Nav>
         {/* Logo */}
         <Link href='/'>
            <LogoAnchor>
               <Logo />
            </LogoAnchor>
         </Link>

         <div css={[tw`flex justify-between items-center w-full`]}>
            <InputWrapper>
               <SearchSVG />
               <Input type='text' placeholder='Search' />
            </InputWrapper>

            <Stack spacing={3} direction='row'>
               <NavButton variant='contained'>Connect Wallet</NavButton>
               {!user && (
                  <NavButton sx={{ bgcolor: '#EBF2FA', color: '#4C6FFF' }}>
                     Sign in
                  </NavButton>
               )}
            </Stack>
         </div>
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
