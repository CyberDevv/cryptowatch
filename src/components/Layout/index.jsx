import tw from 'twin.macro';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';

const index = ({ children }) => {
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
const MainWrapper = tw.div`py-5`;
const Div = tw.main`flex`;
const Main = tw.main`w-full lg:(px-[40px]) xl:(px-[40px])`;

export default index;
