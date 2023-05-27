import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
      return (
            <>
               <Heading title='Veluvana Bali - Owl Bamboo House' subtitle='Solemon Indonesia' center={false}></Heading> 
               <div className='w-full md:h-[60vh] overflow-hidden rounded-lg'>
                  <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/miso/Hosting-826726918494647682/original/d1586407-7873-4c15-91e2-61ab713d2aca.jpeg" alt="header image" />
                  
                  </div>    
            </>
      );
};

export default Header;