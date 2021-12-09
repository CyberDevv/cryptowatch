import tw from 'twin.macro';
import { Button } from '@mui/material';

import FormField from '../FormField.jsx';
import { useState } from 'react';

const EmailSignInMethod = ({ setWithEmailModal }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSignin = (e) => {
      e.preventDefault();
   };

   return (
      <div>
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

            {/* Button */}
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
               onClick={handleSignin}
            >
               Sign in
            </Button>
         </Form>

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
const Label = tw.label`text-dark-darker`;
const Input = tw.input`border-2 block p-4 w-full p-4 rounded mt-1 text-dark-black focus:(outline-none ring-2 ring-dark-black)`;
const BackButton = tw.div`text-center`;

export default EmailSignInMethod;
