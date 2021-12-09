import tw from 'twin.macro';
import { Button, Dialog, DialogActions, Divider } from '@mui/material';

import EmailSigInpMethod from './EmailSigInpMethod.jsx';
import { CloseSVG, GoogleSVG, FacebookSVG } from '../SVG-Icons';
import SignInMethods from './SignInMethods.jsx';
import { styled } from '@mui/system';
import { useState } from 'react';

const SignInModal = ({ setSignInOpened, signInOpened }) => {
   const [withEmailModal, setWithEmailModal] = useState(false);

   const handleClose = () => {
      setSignInOpened(false);
   };
   return (
      <Dialog maxWidth='lg' open={signInOpened} onClose={handleClose}>
         <ModalWrapper>
            {!withEmailModal && (
               <SignInMethods setWithEmailModal={setWithEmailModal} />
            )}

            {/* Email Signup */}
            {withEmailModal && (
               <EmailSigInpMethod setWithEmailModal={setWithEmailModal} />
            )}

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
const SignInButton = styled(Button)({
   textTransform: 'none',
   fontSize: '14px',
   boxShadow: 'none',
   paddingBottom: 18,
   paddingTop: 18,
});

// Tailwind styles
const ModalWrapper = tw.div`lg:(px-20 py-[88px])`;
const SignInDescription = tw.p`text-dark-gray mt-3`;
const ButtonWrapper = tw.div`flex items-center border-2 w-[356px] border-[#DDDDDD] rounded-[8px]`;

export default SignInModal;
