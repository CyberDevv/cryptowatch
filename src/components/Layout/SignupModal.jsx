import tw from 'twin.macro';
import { Button, Dialog, DialogActions, Divider } from '@mui/material';

import { CloseSVG, GoogleSVG, FacebookSVG } from '../SVG-Icons';
import { styled } from '@mui/system';

const SignUpModal = ({ setSignUpOpened, signUpOpened }) => {
   const handleClose = () => {
      setSignUpOpened(false);
   };
   return (
      <Dialog maxWidth='lg' open={signUpOpened} onClose={handleClose}>
         <ModalWrapper>
            <div css={[tw`text-center`]}>
               <h6 css={[tw`letter-spacing[0]`]}>Welcome to Cryptowatch</h6>
               <SignupDescription className='small'>
                  Create an account to get started started{' '}
               </SignupDescription>

               {/* Signup methods */}
               <div css={[tw`mt-12 space-y-8`]}>
                  {/* Google */}
                  <ButtonWrapper>
                     <div css={[tw`px-3.5`]}>
                        <GoogleSVG />
                     </div>
                     <Divider orientation='vertical' flexItem />
                     <SignupButton fullWidth sx={{ color: '#000' }}>
                        Sign up with Google
                     </SignupButton>
                  </ButtonWrapper>

                  {/* Facebook */}
                  <ButtonWrapper css={[tw`bg-[#254792]`]}>
                     <div css={[tw`px-6`]}>
                        <FacebookSVG />
                     </div>
                     <Divider
                        orientation='vertical'
                        flexItem
                        sx={{ bgcolor: '#fff' }}
                     />
                     <SignupButton fullWidth sx={{ color: '#fff' }}>
                        Sign up with Facebook
                     </SignupButton>
                  </ButtonWrapper>

                  {/* Divider */}
                  <Divider
                     sx={{
                        fontSize: 20,
                        fontWeight: 600,
                        letterSpacing: ' -0.025em',
                     }}
                  >
                     Or
                  </Divider>

                  {/* By email */}
                  <SignupButton
                     fullWidth
                     sx={{
                        color: '#fff',
                        bgcolor: '#3754DB',
                        '&:hover': {
                           bgcolor: '#254792',
                        },
                     }}
                  >
                     Sign up with Email
                  </SignupButton>
               </div>
            </div>

            {/* Close button */}
            <DialogActions
               sx={{
                  position: 'absolute',
                  right: 26,
                  top: 26,
                  padding: 0,
               }}
            >
               <Button
                  sx={{ borderRadius: '999px', height: '25px', minWidth: 25 }}
                  onClick={handleClose}
               >
                  <CloseSVG />
               </Button>
            </DialogActions>
         </ModalWrapper>
      </Dialog>
   );
};

// Button styles
const SignupButton = styled(Button)({
   textTransform: 'none',
   fontSize: '14px',
   boxShadow: 'none',
   paddingBottom: 18,
   paddingTop: 18,
});

// Tailwind styles
const ModalWrapper = tw.div`lg:(px-20 py-[88px])`;
const SignupDescription = tw.p`text-dark-gray mt-3`;
const ButtonWrapper = tw.div`flex items-center border-2 w-[356px] border-[#DDDDDD] rounded-[8px]`;

export default SignUpModal;
