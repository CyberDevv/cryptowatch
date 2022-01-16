import tw from 'twin.macro';
import { useSelector } from 'react-redux';

import { SVGIcons } from '../SVG-Icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from '../../utils/auth';
import { logout } from '../../store/user.store';
import { useDispatch } from 'react-redux';

const SideBar = ({ setSignInOpened }) => {
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
                        tw`text-dark-gray hover:(text-dark-black transition-colors duration-300) cursor-pointer flex items-center lg:(space-x-4) letter-spacing[-0.025em]`,
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
      <Nav>
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
const Nav = tw.nav`lg:(w-[180px] min-w-[180px] ml-8) xl:(w-[211px] min-w-[211px]) fixed z-40`;
const NavMenu = tw.ul`lg:(space-y-10)`;
const NavItem = tw.li``;
// const Anchor = tw.a``;

export default SideBar;
