import { Button } from '@mui/material';
import { useState } from 'react';
import tw from 'twin.macro';
import FormField from '../FormField';

const EmailSignupMethod = ({ setWithEmailModal, setSignUpOpened }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleCreateAccount = (e) => {
      e.preventDefault();

      setSignUpOpened(false);
   };

   return (
      <div>
         <h6 css={[tw`letter-spacing[0] text-center`]}>Create an Account</h6>
         <SignupDescription className='small'>
            Create an account to get started started
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
            <FormField
               label='Confirm Password'
               type='password'
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
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
               onClick={handleCreateAccount}
            >
               Sign up
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

export default EmailSignupMethod;
