import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const Search = ({search,set}) => {
  return (
    <div className="bg-black z-50 absolute top-0 left-0 w-full p-2 pl-10 text-gray-400 h-[100vh] flex flex-col gap-2 md:top-[40px]">
      <div className="self-end cursor-pointer mb-2 mr-2 text-xl md:hidden" onClick={()=>set(false)}><IoMdClose /></div>
      <div className="w-full  p-1 flex items-center gap-2 mb-7 md:mt-6  md:w-[80%] md:mx-auto">
        <IoSearch className="text-2xl" />
        <input type="search" placeholder="Search" className="text-2xl w-full border-0 outline-0 font-bold text-gray-200" />
      </div>
      <div className="flex flex-col gap-2 md:w-[80%] md:mx-auto">
        <p className="text-gray-500 ">Quick Links</p>
        <Link onClick={()=>set(!search)} to='/store' className="flex gap-2 items-center font-bold text-gray-100">
          <FaArrowRight className="text-[12px] text-gray-500" /> Find a Store
        </Link >
        <Link to='/accessories' className="flex gap-2 items-center font-bold text-gray-100 ">
          <FaArrowRight className="text-[12px] text-gray-500" /> Accessories
        </Link >

        <Link to='/airpods' className="flex gap-2 items-center font-bold text-gray-100 ">
          <FaArrowRight className="text-[12px] text-gray-500" /> Airpods
        </Link >

        <Link to='/support' className="flex gap-2 items-center font-bold text-gray-100 ">
          <FaArrowRight className="text-[12px] text-gray-500" /> Apple Intelligence
        </Link >
        <Link to='/tvHom' className="flex gap-2 items-center font-bold text-gray-100 ">
          <FaArrowRight className="text-[12px] text-gray-500" /> Apple Trade In
        </Link >
      </div>
    </div>
  );
};

export default Search;
