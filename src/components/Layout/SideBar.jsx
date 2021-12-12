import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';

import ActiveLink from '../ActiveClass';
import { SVGIcons } from '../SVG-Icons';

const SideBar = ({ user }) => {
   const handleLogout = (e) => {
      e.preventDefault();
   };

   return (
      <Nav>
         {/* NavMenu */}
         <NavMenu>
            <NavItemComponent link='/' svg={<SVGIcons home />} label='Home' />
            {user && (
               <NavItemComponent
                  link='/watchList'
                  svg={<SVGIcons watchlist />}
                  label='Watchlist'
               />
            )}
            {user && (
               <NavItemComponent
                  link='/priceAlerts'
                  svg={<SVGIcons priceAlerts />}
                  label='Price Alerts'
               />
            )}
            <NavItemComponent
               link='/settings'
               svg={<SVGIcons settings />}
               label='Settings'
            />
            {user && (
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

const NavItemComponent = ({ label, svg, link }) => {
   return (
      <NavItem>
         <ActiveLink activeClassName='active' href={link}>
            <Anchor css={[tw`text-dark-gray`]}>
               {svg}
               <p className='small'>{label}</p>
            </Anchor>
         </ActiveLink>
      </NavItem>
   );
};

// tailwind Styles
const Nav = tw.nav`lg:(w-[180px] min-w-[180px] ml-6) xl:(w-[211px] min-w-[211px])`;
const NavMenu = tw.ul`lg:(space-y-10)`;
const NavItem = tw.li``;
const Anchor = tw.a` hover:(text-dark-black transition-colors duration-300) cursor-pointer flex items-center lg:(space-x-4) letter-spacing[-0.025em]`;

export default SideBar;
