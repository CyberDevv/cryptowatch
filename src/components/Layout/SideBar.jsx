import tw from 'twin.macro';

const SideBar = () => {
   return <Nav>Sidebar</Nav>;
};

// tailwind Styles
const Nav = tw.nav`lg:(w-[180px] min-w-[180px]) xl:(w-[211px] min-w-[211px])`;

export default SideBar;
