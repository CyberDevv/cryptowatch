import tw from 'twin.macro';
import { useState } from 'react';
import { Button, Dialog, DialogActions } from '@mui/material';

import { CloseSVG } from '../SVG-Icons';
import SignInMethods from './SignInMethods.jsx';
import EmailSigInpMethod from './EmailSigInpMethod.jsx';

const SignInModal = ({ setSignInOpened, signInOpened }) => {
   const [withEmailModal, setWithEmailModal] = useState(false);

   const handleClose = () => {
      setSignInOpened(false);
   };
   return (
      <Dialog maxWidth='md' open={signInOpened} onClose={handleClose}>
         <ModalWrapper>
            {!withEmailModal && (
               <SignInMethods setWithEmailModal={setWithEmailModal} />
            )}

            {/* Email Signup */}
            {withEmailModal && (
               <EmailSigInpMethod
                  setWithEmailModal={setWithEmailModal}
                  setSignInOpened={setSignInOpened}
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

export default SignInModal;
