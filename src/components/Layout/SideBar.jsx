import tw from 'twin.macro';
import { useSelector } from 'react-redux';

import { SVGIcons } from '../SVG-Icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SideBar = () => {
   const { asPath } = useRouter();
   // Gets the user from the store
   const user = useSelector((state) => state.user.value);

   const handleLogout = (e) => {
      e.preventDefault();
   };

   const NavItemComponent = ({ label, svg, link, className }) => {
      return (
         <NavItem>
            <Link href={link}>
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
            {user.email && (
               <NavItemComponent
                  link='/watchList'
                  svg={<SVGIcons watchlist />}
                  label='Watchlist'
                  className={asPath === '/watchList' ? 'active' : ''}
               />
            )}
            {user.email && (
               <NavItemComponent
                  link='/priceAlerts'
                  svg={<SVGIcons priceAlerts />}
                  label='Price Alerts'
                  className={asPath === '/priceAlerts' ? 'active' : ''}
               />
            )}
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
const Nav = tw.nav`lg:(w-[180px] min-w-[180px] ml-6) xl:(w-[211px] min-w-[211px])`;
const NavMenu = tw.ul`lg:(space-y-10)`;
const NavItem = tw.li``;
// const Anchor = tw.a``;

export default SideBar;
