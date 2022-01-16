import React from 'react'
import tw from 'twin.macro';
import Image from 'next/image';
import { useState } from 'react';
import {
   Button,
   Checkbox,
   FormControlLabel,
   FormGroup,
   TextField,
   Typography,
} from '@mui/material';

import Layout from '../Layout';
import { SettingsComponentSVG } from '../SVG-Icons';

const SettingsComponent = () => {
   const [notificationToEmail, setNotificationToEmail] = useState(true);
   const [notificationForNewListing, setNotificationForNewListing] =
      useState(true);
   const [notificationReachesHigh, setNotificationReachesHigh] = useState(true);
   const [currentPassword, setcurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleSaveSettings = React.useCallback((e) => {
      e.preventDefault();

      // Your code should be here
   }, []);

   return (
      <Layout>
         {/* Page title */}
         <p css={[tw`flex items-center space-x-5`]} className='bodyBold'>
            <span>Settihgs</span> <SettingsComponentSVG />
         </p>

         <Main>
            {/* Settings pannel */}
            <SettingsPannel>
               {/* Notification section */}
               <div>
                  <p className='small'>Notifications</p>

                  {/* settings */}
                  <FormGroup>
                     <FormControlLabel
                        control={
                           <Checkbox
                              checked={notificationToEmail}
                              onChange={() =>
                                 setNotificationToEmail(!notificationToEmail)
                              }
                              size='small'
                           />
                        }
                        label={
                           <Typography sx={{ fontSize: '14px' }}>
                              Receive notification on email
                           </Typography>
                        }
                        sx={{ fontSize: '14px' }}
                     />

                     <FormControlLabel
                        control={
                           <Checkbox
                              checked={notificationForNewListing}
                              onChange={() =>
                                 setNotificationForNewListing(
                                    !notificationForNewListing
                                 )
                              }
                              size='small'
                           />
                        }
                        label={
                           <Typography sx={{ fontSize: '14px' }}>
                              Receive daily notification on new coin listing
                           </Typography>
                        }
                     />

                     <FormControlLabel
                        control={
                           <Checkbox
                              checked={notificationReachesHigh}
                              onChange={() =>
                                 setNotificationReachesHigh(
                                    !notificationReachesHigh
                                 )
                              }
                              size='small'
                           />
                        }
                        label={
                           <Typography sx={{ fontSize: '14px' }}>
                              Receive notificatio whenn watchlisted coin reaches
                              all time high
                           </Typography>
                        }
                     />
                  </FormGroup>
               </div>

               {/* Password section */}
               {/* settings */}
               <Form>
                  <p css={[tw`mb-6`]} className='small'>
                     Change Password
                  </p>

                  <TextField
                     label='Enter current password'
                     type='password'
                     variant='outlined'
                     fullWidth
                     value={currentPassword}
                     onChange={(e) => setcurrentPassword(e.target.value)}
                  />

                  <div css={[tw` mb-20 space-y-6`]}>
                     <p css={[tw`mt-6`]} className='small'>
                        Create New Password
                     </p>

                     <TextField
                        label='Enter new password'
                        type='password'
                        fullWidth
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                     />
                     <TextField
                        label='Confirm new password'
                        type='password'
                        sx={{ display: 'block' }}
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                  </div>

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
                     onClick={handleSaveSettings}
                  >
                     Save Settings
                  </Button>
               </Form>
            </SettingsPannel>

            {/* Download section */}
            <DownnloadPannel>
               <a css={[tw`lg:max-w-xs xl:max-w-md 2xl:max-w-lg`]} href='https://www.centuryleap.com'>
                  <Image
                     src='/images/download app.png'
                     width={504}
                     height={400}
                     alt='Download for other devices'
                  />
               </a>
            </DownnloadPannel>
         </Main>
      </Layout>
   );
};

// Tailwind styles
const Main = tw.div`flex my-14`;
const SettingsPannel = tw.div`space-y-14 w-1/2`;
const DownnloadPannel = tw.div`w-1/2 flex justify-center`;
const Form = tw.form`max-w-md`;

export default SettingsComponent;
