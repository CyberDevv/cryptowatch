import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import { fetchCoins } from '../../store/coins.store';
import {fetchCoinsWithNoData} from '../../store/coinsWithNoData.store'

const Layout = ({ children }) => {
   const dispatch = useDispatch();

   const [sideBarOpened, setSideBarOpened] = useState(false);
   const [signInOpened, setSignInOpened] = useState(false);

   useEffect(() => {
      dispatch(fetchCoins());
      dispatch(fetchCoinsWithNoData());
   }, [dispatch]);

   return (
      <MainWrapper>
         <NavBar
            signInOpened={signInOpened}
            setSignInOpened={setSignInOpened}
         />
         <Div>
            <SideBar setSignInOpened={setSignInOpened} sideBarOpened= {sideBarOpened} />

            <Main>{children}</Main>
         </Div>
      </MainWrapper>
   );
};

// Tailwind styles
const MainWrapper = tw.div`pb-5 overflow-x-hidden max-w-[1920px] mx-auto`;
const Div = tw.main`flex`;
const Main = tw.main`w-full mt-8 px-6 lg:(px-[20px] ml-[180px] mt-0) xl:(px-[30px] ml-[210px]) 2xl:(px-[40px] ml-[240px])`;

export default Layout;
