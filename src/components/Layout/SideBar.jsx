import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';

import { SVGIcons } from '../SVG-Icons';

const SideBar = () => {
   const [active, setActive] = useState('Home');
   return (
      <Nav>
         {/* NavMenu */}
         <NavMenu>
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} home />}
               label='Home'
            />
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} watchlist />}
               label='Watchlist'
            />
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} wallet />}
               label='Wallet'
            />
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} priceAlerts />}
               label='Price Alerts'
            />
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} settings />}
               label='Settings'
            />
            <NavItemComponent
               active={active}
               link='/'
               svg={<SVGIcons active={active} logout />}
               label='Log out'
            />
         </NavMenu>
      </Nav>
   );
};

const NavItemComponent = ({ active, label, svg, link }) => {
   return (
      <NavItem>
         <Link href={link}>
            <Anchor
               css={[
                  active === label ? tw`text-primary-blue` : tw`text-dark-gray`,
               ]}
            >
               {svg}
               <p className='small'>{label}</p>
            </Anchor>
         </Link>
      </NavItem>
   );
};

// tailwind Styles
const Nav = tw.nav`lg:(w-[180px] min-w-[180px] ml-6) xl:(w-[211px] min-w-[211px])`;
const NavMenu = tw.ul`lg:(space-y-10)`;
const NavItem = tw.li``;
const Anchor = tw.a`cursor-pointer flex items-center lg:(space-x-4) letter-spacing[-0.025em]`;

export default SideBar;
