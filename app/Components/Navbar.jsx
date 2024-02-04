"use client";
import React, { useState } from "react";
import SearchModal from "./SearchModal";
import Image from "next/image";
import Logo from "@/public/logo.png";
import SearchIcon from "@/public/search.svg";
const Navbar = () => {
  const [isResponsiveOpen, setResponsiveOpen] = useState(false);

  const toggleResponsive = () => {
    setResponsiveOpen(!isResponsiveOpen);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  return (
    <>
      <div className="container mx-auto w-full px-5  md:px-[20px] py-[12px] flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          {/* Hamburger Icon (visible on small screens) */}
          <div className="md:hidden   w-full justify-end">
            <button
              id="toggleBtn"
              className="text-black"
              onClick={toggleResponsive}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <Image
            width={0}
            height={0}
            priority
            className="w-[40px] h-[40px]"
            src={Logo}
            alt=""
          />

          <h2 className="font-roboto text-2xl font-extrabold leading-9">ZinTools</h2>
        </div>
        <span onClick={openSearch} className=" md:hidden">
          <Image width={0} height={0} src={SearchIcon} alt="" />
        </span>
        <div className="relative max-w-[500px] hidden md:block w-full rounded-3xl bg-[#f2f2f2]">
          <input
            type="text"
            className="appearance-none outline-none bg-transparent w-full placeholder:text-[#9ca3af] py-[12px] px-7"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
          <span className="absolute right-5 top-[10px] border-l pl-3 py-1">
            <Image width={0} height={0} src={SearchIcon} alt="" />
          </span>
        </div>
        <div className="hidden md:flex gap-[14px]">
          <button className="py-[10px] rounded-full font-roboto text-lg font-semibold leading-5">
            Log in
          </button>
          <button className="text-white bg-[#4866e2] py-[10px] px-[15px] rounded-3xl font-roboto text-lg font-semibold leading-5">
            Sign up
          </button>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      <nav className="p-4 relative">
        {/* Navbar as (hidden on small screens) */}
        <div className="container mx-auto flex justify-center items-center">
          <div className="hidden md:flex space-x-4 gap-2">
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Stock video
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Video templates
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Music
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Sound Effect
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Graphic templates
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Presentation templates
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Photo
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              fonts
            </a>
            <a className="cursor-pointer border-b-transparent border-b hover:border-black py-2">
              Add-ons
            </a>
            <div className="group relative flex">
              <a className="dropdown cursor-pointer border-b-transparent border-b hover:border-black py-2">
                more
              </a>
              <div className="hidden absolute top-6 left-0 mt-2 w-[200px] space-y-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Item 1
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Item 2
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Item 3
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Item 4
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`md: p-2 flex flex-col items-center absolute bg-white w-full transition  ${
          isResponsiveOpen ? "" : "hidden"
        }`}
      >
        <a className="py-2">Stock video</a>

        <a className="py-2">Video templates</a>

        <a className="py-2">Music</a>

        <a className="py-2">Sound Effect</a>

        <a className="py-2">Graphic templates</a>

        <a className="py-2">Presentation templates</a>

        <a className="py-2">Photo</a>

        <a className="py-2">fonts</a>

        <a className="py-2">Add-ons</a>

        <a className="py-2">more</a>

        <div className="flex flex-col gap-[14px]">
          <button className="py-[10px] rounded-full font-roboto text-lg font-semibold leading-5">
            Log in
          </button>
          <button className="text-white bg-[#4866e2] py-[10px] px-[15px] rounded-3xl font-roboto text-lg font-semibold leading-5">
            Sign up
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
