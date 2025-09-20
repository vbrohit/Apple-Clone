import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoApple, IoSearchOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Nav1 from './Nav1';
import Search from '../MainComp/Search';

const Nav = ({ windowWIdth }) => {
  const [smallNav, setSmallNav] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  const bigMenu = () => {
    setSmallNav(true);
  };

  return (
    <div
      className='w-full h-10 flex justify-center items-center sticky top-0 z-30'
      style={{
        backdropFilter: `blur(2px)`,
        backgroundColor: `${search ? 'black' : '#000000ef'}`,
      }}
    >
      {/* Small mobile nav */}
      {smallNav && windowWIdth < 600 && <Nav1 change={setSmallNav} />}

      {/* Search overlay */}
      {search && <Search search={search} set={setSearch} />}

      <ul className='flex gap-4 bg-transparent justify-between items-center w-[95%] md:w-[70%]'>
        {/* Logo */}
        <li className='flex justify-center items-center'>
          <Link to='/' className="text-gray-400 text-base hover:text-white">
            <IoLogoApple className="text-2xl md:text-3xl" />
          </Link>
        </li>

        {/* Menu items */}
        <li className='hidden md:flex'>
          <Link to='/store' className="text-gray-400 text-[12px] hover:text-white">Store</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/mac' className="text-gray-400 text-[12px] hover:text-white">Mac</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/ipad' className="text-gray-400 text-[12px] hover:text-white">iPad</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/iphone' className="text-gray-400 text-[12px] hover:text-white">iPhone</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/watch' className="text-gray-400 text-[12px] hover:text-white">Watch</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/airpods' className="text-gray-400 text-[12px] hover:text-white">AirPods</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/tvHome' className="text-gray-400 text-[12px] hover:text-white">TV & Home</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/entertainment' className="text-gray-400 text-[12px] hover:text-white">Entertainment</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/accessories' className="text-gray-400 text-[12px] hover:text-white">Accessories</Link>
        </li>
        <li className='hidden md:flex'>
          <Link to='/support' className="text-gray-400 text-[12px] hover:text-white">Support</Link>
        </li>

        {/* Right icons */}
        <li className='flex gap-5 items-center'>
          <button onClick={handleSearch} className="text-gray-400 hover:text-white">
            <IoSearchOutline className="text-lg md:text-xl" />
          </button>
          <Link className="text-gray-400 hover:text-white">
            <BsBag className="text-lg md:text-xl" />
          </Link>
          <button onClick={bigMenu} className='md:hidden text-gray-400 hover:text-white'>
            <HiOutlineMenuAlt4 className="text-lg md:text-xl" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
