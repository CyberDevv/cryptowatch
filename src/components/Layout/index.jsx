import tw from 'twin.macro';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';

const index = ({ children }) => {
   return (
      <MainWrapper>
         <SideBar />
         <Main>
            <NavBar />
            {children}
         </Main>
      </MainWrapper>
   );
};

// Tailwind styles
const MainWrapper = tw.div`flex`;
const Main = tw.main``;

export default index;
