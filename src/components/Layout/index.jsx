import tw from 'twin.macro';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import { fetchCoins } from '../../store/coins.store';

const Layout = ({ children }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCoins());
   }, [fetchCoins]);
   
   return (
      <MainWrapper>
         <NavBar />
         <Div>
            <SideBar />

            <Main>{children}</Main>
         </Div>
      </MainWrapper>
   );
};

// Tailwind styles
const MainWrapper = tw.div`py-5 overflow-x-hidden`;
const Div = tw.main`flex`;
const Main = tw.main`w-full lg:(px-[40px]) xl:(px-[40px])`;

export default Layout;
