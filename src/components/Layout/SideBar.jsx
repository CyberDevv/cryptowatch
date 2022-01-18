import tw from 'twin.macro';
import { useSelector } from 'react-redux';

import { SVGIcons } from '../SVG-Icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from '../../utils/auth';
import { logout } from '../../store/user.store';
import { useDispatch } from 'react-redux';

const SideBar = ({ setSignInOpened, sideBarOpened }) => {
   const { asPath } = useRouter();

   const dispatch = useDispatch();

   // Gets the user from the store
   const user = useSelector((state) => state.user.value);

   const handleLogout = (e) => {
      e.preventDefault();

      signOut().then((res) => {
         res && dispatch(logout());
      });
   };

   const handleLinkClick = () => {
      !user.email && setSignInOpened(true);
   };

   const NavItemComponent = ({ label, svg, link, className }) => {
      return (
         <NavItem>
            <button onClick={handleLinkClick}>
               <Link href={user.email ? link : ''}>
                  <a
                     className={className}
                     css={[
                        tw`text-dark-gray hover:(text-dark-black transition-colors duration-300) cursor-pointer flex items-center space-x-4 letter-spacing[-0.025em]`,
                     ]}
                  >
                     {svg}
                     <p className='small'>{label}</p>
                  </a>
               </Link>
            </button>
         </NavItem>
      );
   };

   return (
      <Nav css={[sideBarOpened ? tw`translate-x-0` : tw`-translate-x-full`]}>
         {/* NavMenu */}
         <NavMenu>
            <NavItemComponent
               link='/'
               svg={<SVGIcons home />}
               label='Home'
               className={asPath === '/' ? 'active' : ''}
            />

            <NavItemComponent
               link='/watchList'
               svg={<SVGIcons watchlist />}
               label='Watchlist'
               className={asPath === '/watchList' ? 'active' : ''}
            />

            <NavItemComponent
               link='/priceAlerts'
               svg={<SVGIcons priceAlerts />}
               label='Price Alerts'
               className={asPath === '/priceAlerts' ? 'active' : ''}
            />

            <NavItemComponent
               link='/settings'
               svg={<SVGIcons settings />}
               label='Settings'
               className={asPath === '/settings' ? 'active' : ''}
            />
            {user.email && (
               <button onClick={handleLogout}>
                  <NavItemComponent
                     link=''
                     svg={<SVGIcons logout />}
                     label='Log out'
                  />
               </button>
            )}
         </NavMenu>
      </Nav>
   );
};

// tailwind Styles
const Nav = tw.nav`bg-[#fafafa] transition-transform transform h-full w-[180px] px-6 shadow-lg py-16 lg:(bg-transparent transform-none py-0 shadow-none px-0 w-[180px] min-w-[180px] ml-8) xl:(w-[181px] min-w-[181px]) 2xl:(w-[211px] min-w-[211px]) fixed z-40`;
const NavMenu = tw.ul`space-y-10`;
const NavItem = tw.li``;
// const Anchor = tw.a``;

export default SideBar;
