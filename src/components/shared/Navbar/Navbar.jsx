import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropDown';

const Navbar = () => {
      return (
            <div className='fixed w-full top-0 z-10 shadow-sm bg-white'>
                 <div className='py-4 border-b-[1px] '>
                  
                  <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>

                        <Logo></Logo>
                        <Search></Search>
                        <MenuDropdown></MenuDropdown>

                    </div>
                  </Container>
                  </div> 
            </div>
      );
};

export default Navbar;