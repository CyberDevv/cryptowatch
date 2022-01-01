import tw from 'twin.macro';
import { useState } from 'react';
import { Button, Dialog, DialogActions } from '@mui/material';

import { CloseSVG } from '../SVG-Icons';
import SignupMethods from './SignupMethods.jsx';
import EmailSignupMethod from './EmailSignupMethod.jsx';

const SignUpModal = ({ setSignUpOpened, signUpOpened }) => {
   const [withEmailModal, setWithEmailModal] = useState(false);

   const handleClose = () => {
      setSignUpOpened(false);
   };
   return (
      <Dialog maxWidth='md' open={signUpOpened} onClose={handleClose}>
         <ModalWrapper>
            {/* Signup methods */}
            {!withEmailModal && (
               <SignupMethods setWithEmailModal={setWithEmailModal} />
            )}

            {/* Email Signup */}
            {withEmailModal && (
               <EmailSignupMethod
                  setWithEmailModal={setWithEmailModal}
                  setSignUpOpened={setSignUpOpened}
               />
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

// Tailwind styles
const ModalWrapper = tw.div`lg:(px-20 py-[88px])`;

export default SignUpModal;
