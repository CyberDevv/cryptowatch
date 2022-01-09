import tw from 'twin.macro';
import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

import FormField from '../FormField.jsx';
import {
   signInWithEmail,
   ForgotPassword,
   VerifyOTP,
   ResendOTP,
   setNewPassword,
} from '../../utils/auth.js';

const EmailSignInMethod = ({ setWithEmailModal, setSignInOpened }) => {
   const [forgotPassModal, setForgotPassModal] = useState(false);
   const [forgotPinSent, setForgotPinSent] = useState(false);
   const [rememberMe, setRememberMe] = useState(false);
   const [resetPIN, setResetPIN] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [otp, setOTP] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmNewPassword, setConfirmNewPassword] = useState('');

   const handleSignIn = (e) => {
      // TODO: make a better handle of this
      e.preventDefault();

      signInWithEmail(email, password, rememberMe).then((res) => {
         console.log(res);
         res && setSignInOpened(false);
      });
   };

   const handleForgotPass = (e) => {
      // TODO: make a better handle of this
      e.preventDefault();

      ForgotPassword(email).then((res) => {
         console.log(res);
         res && setForgotPinSent(true);
      });
   };

   const handleResendOTP = (e) => {
      e.preventDefault();

      ResendOTP();
   };

   const handleSendOTP = (e) => {
      e.preventDefault();
      // INput youir codes in here

      VerifyOTP(otp).then((res) => {
         console.log(res);
         res && setResetPIN(true);
      });
   };

   const handleResetPassword = (e) => {
      e.preventDefault();

      setNewPassword(newPassword, confirmNewPassword);

      setSignInOpened(false);
      // Input your code here
   };

   return (
      <div>
         {/* Sign in with email */}
         {!forgotPassModal && !forgotPinSent && (
            <>
               <h6 css={[tw`letter-spacing[0] text-center`]}>
                  Sign in to your Account
               </h6>
               <SignupDescription className='small'>
                  Enter your details to sign in to your account
               </SignupDescription>

               <Form>
                  <FormField
                     label='Email Address'
                     type='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormField
                     label='Password'
                     type='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <div>
                     <div css={[tw`flex items-center justify-between `]}>
                        {/* Remember me */}
                        <FormControlLabel
                           sx={{ color: '#3754DBE5', fontSize: '14px' }}
                           control={
                              <Checkbox
                                 onChange={() => setRememberMe(!rememberMe)}
                                 size='small'
                              />
                           }
                           label='Remember me'
                        />

                        {/* forgot pin */}
                        <Button
                           sx={{
                              fontSize: '14px',
                              textTransform: 'none',
                              color: '#3754DBE5',
                           }}
                           onClick={() => setForgotPassModal(true)}
                        >
                           Forgot your pin?
                        </Button>
                     </div>

                     {/* sign in Button */}
                     <Button
                        oncli
                        type='submit'
                        fullWidth
                        sx={{
                           color: '#fff',
                           bgcolor: '#3754DB',
                           textTransform: 'none',
                           fontSize: '14px',
                           boxShadow: 'none',
                           paddingBottom: '18px',
                           paddingTop: '18px',
                           '&:hover': {
                              bgcolor: '#254792',
                           },
                        }}
                        onClick={handleSignIn}
                     >
                        Sign in
                     </Button>
                  </div>
               </Form>
            </>
         )}

         {/* Forgot pin */}
         {forgotPassModal && !forgotPinSent && (
            <>
               <h6 css={[tw`letter-spacing[0] text-center`]}>
                  Forgot your pin?
               </h6>
               <SignupDescription
                  className='small'
                  css={[tw`w-full text-center `]}
               >
                  Enter the email you signed up with, an <br /> OTP would be
                  sent to this email.
               </SignupDescription>

               <Form>
                  <FormField
                     label='Email Address'
                     type='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* sign in Button */}
                  <Button
                     oncli
                     type='submit'
                     fullWidth
                     sx={{
                        color: '#fff',
                        bgcolor: '#3754DB',
                        textTransform: 'none',
                        fontSize: '14px',
                        boxShadow: 'none',
                        paddingBottom: '18px',
                        paddingTop: '18px',
                        '&:hover': {
                           bgcolor: '#254792',
                        },
                     }}
                     onClick={handleForgotPass}
                  >
                     Send OTP
                  </Button>
               </Form>
            </>
         )}

         {/* Enter OTP */}
         {forgotPinSent && !resetPIN && (
            <>
               <h6 css={[tw`letter-spacing[0] text-center`]}>Enter OTP</h6>
               <SignupDescription
                  className='small'
                  css={[tw`w-full text-center `]}
               >
                  Enter the one time password (OTP) sent <br /> to your email
                  address
               </SignupDescription>

               <Form>
                  <Input
                     type='password'
                     value={otp}
                     onChange={(e) => setOTP(e.target.value)}
                     maxLength={4}
                     onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ''))
                     }
                  />

                  <div>
                     <Button
                        sx={{
                           fontSize: '14px',
                           textTransform: 'none',
                           color: '#3754DB',
                        }}
                        onClick={handleResendOTP}
                     >
                        Resend OTP?
                     </Button>

                     {/* send otp Button */}
                     <Button
                        oncli
                        type='submit'
                        fullWidth
                        sx={{
                           color: '#fff',
                           bgcolor: '#3754DB',
                           textTransform: 'none',
                           fontSize: '14px',
                           boxShadow: 'none',
                           paddingBottom: '18px',
                           paddingTop: '18px',
                           '&:hover': {
                              bgcolor: '#254792',
                           },
                        }}
                        onClick={handleSendOTP}
                     >
                        Send OTP
                     </Button>
                  </div>
               </Form>
            </>
         )}

         {/* Reset pin */}
         {resetPIN && (
            <>
               <h6 css={[tw`letter-spacing[0] text-center`]}>
                  Reset your password
               </h6>
               <SignupDescription
                  className='small'
                  css={[tw`w-full text-center `]}
               >
                  Choose a new password
               </SignupDescription>

               <Form>
                  <TextField
                     label='New Password'
                     variant='outlined'
                     fullWidth
                     value={newPassword}
                     type='password'
                     onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <TextField
                     label='Confirm Password'
                     variant='outlined'
                     fullWidth
                     type='password'
                     value={confirmNewPassword}
                     onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />

                  {/* send otp Button */}
                  <Button
                     oncli
                     type='submit'
                     fullWidth
                     sx={{
                        color: '#fff',
                        bgcolor: '#3754DB',
                        textTransform: 'none',
                        fontSize: '14px',
                        boxShadow: 'none',
                        paddingBottom: '18px',
                        paddingTop: '18px',
                        '&:hover': {
                           bgcolor: '#254792',
                        },
                     }}
                     onClick={handleResetPassword}
                  >
                     Done
                  </Button>
               </Form>
            </>
         )}

         <BackButton>
            <Button
               onClick={() => setWithEmailModal(false)}
               sx={{ textDecoration: 'underline' }}
            >
               Back
            </Button>
         </BackButton>
      </div>
   );
};

// Tailwind styles
const SignupDescription = tw.p`text-dark-gray mt-3 text-center`;
const Form = tw.form`lg:(my-10 space-y-8  w-[356px])`;
const BackButton = tw.div`text-center`;
const Input = tw.input`border-b-4 border-dark-gray w-full text-6xl tracking-[32px] px-8 text-center focus:(outline-none)`;

export default EmailSignInMethod;
