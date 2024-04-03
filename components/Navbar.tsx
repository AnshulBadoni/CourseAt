"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CustomButton } from '.';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);  
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <header className='w-full absolute shadow-lg hover:shadow-lime-50 shadow-white duration-500 z-10 py-6 px-6'>
      <Link href="/"><img className='w-[100px] ' src='https://www.logolynx.com/images/logolynx/aa/aa3993182ad88a047d21fbcc09b44d04.png'/></Link>
      <nav className='absolute top-0 right-0 gap-6 max-w-[40vw] mx-auto flex justify-between items-center py-6 px-6'>
        <Link href="/" className='font-bold'>Home</Link>
        <Link href="/about" className='font-bold'>About</Link>
        <Link href="/explore" className='font-bold'>Explore</Link>
        <div className={`isMenuOpen `}></div>
        <div className='sm:hidden '>
          <button onClick={toggleMenu} className='text-xl font-bold'>
            ☰
          </button>
          {isMenuOpen && (
            <div className='absolute top-16 right-0 bg-white p-4'>
              <Link href="/" className='block font-bold mb-2'>Home</Link>
              <Link href="/about" className='block font-bold mb-2'>About</Link>
              <Link href="/explore" className='block font-bold mb-2'>Explore</Link>
              {/* Add more links as needed */}
            </div>
          )}
        </div>

        {/* Render the regular links for larger screens */}
        <div className='hidden sm:flex items-center'>
          <Link href="/" className='font-bold'>Sign IN/UP</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

