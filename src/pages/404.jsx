import tw from 'twin.macro';
import Head from 'next/head';
import Lottie from 'lottie-react';
import { Button, Link } from '@mui/material';

import PageNotFoundLottie from '../lottie/404.json';

const PageNotFound = () => {
   return (
      <>
         <Head>
            <title>Page Not Found | CryptoWatch</title>
         </Head>

         <Div>
            <Lottie
               className='wow'
               animationData={PageNotFoundLottie}
               interactivity={interactivity}
            />
            <TextWrapper>
               <p>The page you requested is not found</p>
               <Link href='/'>
                  <a>
                     <BCustomutton color='primary' variant='contained'>
                        Back to Home
                     </BCustomutton>
                  </a>
               </Link>
            </TextWrapper>
         </Div>
      </>
   );
};

const interactivity = {
   mode: 'cursor',
   actions: [
      {
         position: { x: [0, 1], y: [0, 1] },
         type: 'seek',
         frames: [0, 180],
      },
   ],
};

// Tailwind styles
const Div = tw.div`flex items-center flex-col justify-center h-screen container mx-auto`;
const TextWrapper = tw.div`mt-8 text-center`;
const BCustomutton = tw(Button)`mt-4 normal-case`;

export default PageNotFound;
