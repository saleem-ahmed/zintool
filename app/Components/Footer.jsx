import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons

import FbIcon from "@/public/facebook.png";
import TwIcon from "@/public/twitter.png";
import YouIcon from "@/public/youtube.png";
import MIcon from "@/public/moon.png";

const Footer = () => {
  return (
    <div className="bg-[#f1f4f5] mt-[60px]">
      <div className="mx-auto px-3 sm:px-[30px] lg:max-w-[1530px] py-[40px]">
        <div className="flex items-center gap-7">
          <span href="#" className="text-black text-20px font-[700]">
            Follow Us
          </span>

          <Image
            className="h-[26px] w-[26px] cursor-pointer opacity-60 hover:opacity-100"
            src={YouIcon}
            width={0}
            height={0}
            alt=""
          />
          <Image
            className="h-[26px] w-[26px] cursor-pointer opacity-60 hover:opacity-100"
            src={TwIcon}
            width={0}
            height={0}
            alt=""
          />
          <Image
            className="h-[26px] w-[26px] cursor-pointer opacity-60 hover:opacity-100"
            src={FbIcon}
            width={0}
            height={0}
            alt=""
          />
        </div>

        <div className="my-8 border-y border-[#e5e7e9] py-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8  ">
          <div className=" text-black">
            <h6 className="font-[600] mb-8">Internal Links</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Documentaries</Link>
              </li>
              <li>
                <Link href="#">Themes</Link>
              </li>
              <li>
                <Link href="#">Chrome casts</Link>
              </li>
            </ul>
          </div>
          <div className=" text-black">
            <h6 className="font-[600] mb-8">Enterprise</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Download Chrome Browser</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser for Enterprise</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser Devices</Link>
              </li>
              <li>
                <Link href="#">ChromeOS</Link>
              </li>
              <li>
                <Link href="#"> Google Cloud </Link>
              </li>
              <li>
                <Link href="#"> Google Workspace </Link>
              </li>
            </ul>
          </div>
          <div className=" text-black">
            <h6 className="font-[600] mb-8">Internal Links</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Documentaries</Link>
              </li>
              <li>
                <Link href="#">Themes</Link>
              </li>
              <li>
                <Link href="#">Chrome casts</Link>
              </li>
            </ul>
          </div>
          <div className=" text-black">
            <h6 className="font-[600] mb-8">Enterprise</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Download Chrome Browser</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser for Enterprise</Link>
              </li>
              <li>
                <Link href="#">Chrome Browser Devices</Link>
              </li>
              <li>
                <Link href="#">ChromeOS</Link>
              </li>
              <li>
                <Link href="#"> Google Cloud </Link>
              </li>
              <li>
                <Link href="#"> Google Workspace </Link>
              </li>
            </ul>
          </div>
          <div className=" text-black">
            <h6 className="font-[600] mb-8">Internal Links</h6>
            <ul className="text-[#1d2938] flex flex-col gap-5">
              <li>
                <Link href="#">Documentaries</Link>
              </li>
              <li>
                <Link href="#">Themes</Link>
              </li>
              <li>
                <Link href="#">Chrome casts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center  justify-between">
          <div class="flex items-center">
            <h1 class="text-[#1d2938] font-[700] text-[28px] cursor-pointer">
              Similar
              <span class="text-[#f1f4f5] text-[22px] rounded-xl bg-[#1d2938] p-2 ms-1">
                Watch
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ul className="hidden md:flex w-full gap-5 ms-2 text-[#1d2938]">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Trems and conditions</Link>
              </li>
              <li>
                <Link href="#">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">EULA</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <a
              href=""
              class="w-[45px] h-[45px] bg-[#dedede] rounded-full flex justify-center items-center"
            >
              <Image
                class="h-[26px] w-[26px]"
                src={MIcon}
                width={0}
                height={0}
                alt=""
              />
            </a>
          </div>
        </div>
        <ul class="md:hidden flex flex-wrap gap-5 mt-6">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms and conditions</Link>
          </li>
          <li>
            <Link href="#">Cookies Policy</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">EULA</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
