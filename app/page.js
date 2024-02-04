"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// images
import img1 from "@/public/Crop.svg";
import img2 from "@/public/edit.svg";
import img3 from "@/public/replace.svg";
import img4 from "@/public/Rotate.svg";
import img5 from "@/public/ptp.svg";
import img6 from "@/public/ptf.svg";
import img7 from "@/public/pte.svg";
import img8 from "@/public/ptj.svg";
import img9 from "@/public/ptt.svg";
import img10 from "@/public/wtp.svg";
import img11 from "@/public/ttp.svg";
import img12 from "@/public/ptp1.svg";
import img13 from "@/public/etp.svg";
import img14 from "@/public/jtp.svg";
import left from "@/public/left.png";
import right from "@/public/right.png";
import All from "@/public/right-arrow.png";
import BookIcon from "@/public/bookmark.png";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Edit PDF",
      href: "#",
      price: "use the best online tool to edit pdfs in our browser",
      imageSrc: img2,
    },
    {
      id: 2,
      name: "Crop PDF",
      href: "#",
      price: "Crop PDF online to a selected area, adjust margin size..",
      imageSrc: img1,
    },
    {
      id: 3,
      name: "Replace text",
      href: "#",
      price: "The easiest way to replace text online.",
      imageSrc: img3,
    },
    {
      id: 4,
      name: "Rotate PDF",
      href: "#",
      price: "Rotate and save your PDF pages online for free.",
      imageSrc: img4,
    },
    // More products...
  ];
  const products1 = [
    {
      id: 1,
      name: "PDF to Word",
      price: "Easily convert PDF to Word document",
      imageSrc: img6,
    },
    {
      id: 2,
      name: "PDF to PPT",
      href: "#",
      price: "Easily convert PDF to PPT document",
      imageSrc: img5,
    },
    {
      id: 3,
      name: "PDF to Excel",
      href: "#",
      price: "The easiest way to replace text online.",
      imageSrc: img7,
    },
    {
      id: 4,
      name: "PDF to JPG",
      href: "#",
      price: "Rotate and save your PDF pages online for free.",
      imageSrc: img8,
    },
    {
      id: 5,
      name: "PDF to TXT",
      href: "#",
      price: "Rotate and save your PDF pages online for free.",
      imageSrc: img9,
    },
  ];
  const products2 = [
    {
      id: 1,
      name: "Word to PDF",
      price: "Easily convert PDF to Word document",
      imageSrc: img10,
    },
    {
      id: 2,
      name: "PPT to PDF",
      href: "#",
      price: "Easily convert PDF to PPT document",
      imageSrc: img12,
    },
    {
      id: 3,
      name: "Excel to PDF",
      href: "#",
      price: "The easiest way to replace text online.",
      imageSrc: img13,
    },
    {
      id: 4,
      name: "JPG to PDF",
      href: "#",
      price: "Rotate and save your PDF pages online for free.",
      imageSrc: img14,
    },
    {
      id: 5,
      name: "PDF to TXT",
      href: "#",
      price: "Rotate and save your PDF pages online for free.",
      imageSrc: img11,
    },
  ];
  const SwiperItems = [
    {
      image: img6,
      title: "PDF to Word",
      description: "Easily convert PDF to word document.",
    },
    {
      image: img5,
      title: "PDF to PPT",
      description: "Convert PDF to Powerpoint online",
    },
    {
      image: img12,
      title: "PDF to Excel",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: img8,
      title: "PDF to JPG",
      description: "Convert PDF files to a set of optimized JPG, PNG,BMP,G",
    },
    {
      image: img9,
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: img6,
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
    {
      image: img9,
      title: "PDF to TXT",
      description: "Rotate and save your PDF pages online for file",
    },
  ];
  const customNavigation = {
    prevEl: ".custom-prev-button",
    nextEl: ".custom-next-button",
  };
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-[30px] sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="mb-10 text-30 font-bold leading-20 md:font-bold md:text-2xl md:leading-36 md:text-gray-800">
              Your Bookmarks
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="bg-white border border-gray-200 rounded-md transition-all duration-300 p-4 hover:shadow-lg"
              >
                <Image
                  width={0}
                  height={0}
                  className="h-65 w-65 object-center"
                  src={product.imageSrc}
                  alt=""
                />
                <h3 className="mt-4 font-bold text-2xl leading-7 text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600 overflow-hidden max-w-[200px] text-wrap">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-[30px] sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-row justify-between">
            <h2 className="mb-10 text-30 font-bold leading-20 md:font-bold md:text-2xl md:leading-36 text-gray-800">
              Convert from PDF
            </h2>
            <span className="font-bold leading-20 text-[10px] md:text-[18px]  md:font-bold bg-[#f2f2f2] px-4 py-2 rounded-full md:leading-36 text-gray-800 h-max flex gap-2 items-center cursor-pointer">
              All
              <Image
                className="w-[10px] h-[10px] md:w-[15px] md:h-[15px]"
                width={0}
                height={0}
                src={All}
                alt=""
              />
            </span>
          </div>
          <div className="relative">
            <Swiper
              loop={true}
              slidesPerView={5}
              spaceBetween={10}
              navigation={customNavigation}
              modules={[Navigation]}
              className="mySwiper "
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {SwiperItems.map((product, index) => (
                <SwiperSlide key={index} className="py-[10px]">
                  <div
                    key={index}
                    className="relative group border border-gray-200 rounded-md transition-all duration-300 p-4 hover:shadow-xl hover:bg-[#ffffff] w-full h-full cursor-pointer"
                  >
                    <Image
                      width={0}
                      height={0}
                      className="hidden absolute right-[10px] top-2 h-[20px] w-[20px] object-center group-hover:block"
                      src={BookIcon}
                      alt=""
                    />
                    <Image
                      width={0}
                      height={0}
                      className="h-65 w-65 object-center"
                      src={product.image}
                      alt=""
                    />
                    <h3 className="mt-4 font-bold text-2xl leading-7 text-gray-800">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm leading-5 text-gray-600 overflow-hidden max-w-[200px] text-wrap">
                      {product.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="custom-prev-button absolute top-[90px] left-[-25px] z-10">
              <Image
                className="w-[30px] h-[30px] cursor-pointer"
                width={0}
                height={0}
                src={left}
                alt=""
              />
            </div>
            <div className="custom-next-button absolute top-[90px] right-[-25px] z-10">
              <Image
                className="w-[30px] h-[30px] cursor-pointer"
                width={0}
                height={0}
                src={right}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* box one */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-[30px] sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="mb-10 text-30 font-bold leading-20 md:font-bold md:text-2xl md:leading-36 md:text-gray-800">
              Convert from PDF
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products1.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="bg-white border border-gray-200 rounded-md transition-all duration-300 p-4 hover:shadow-lg"
              >
                <Image
                  width={0}
                  height={0}
                  className="h-65 w-65 object-center"
                  src={product.imageSrc}
                  alt=""
                />
                <h3 className="mt-4 font-bold text-2xl leading-7 text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600 overflow-hidden max-w-[200px] text-wrap">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* box two */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-[40px] sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="mb-10 text-30 font-bold leading-20 md:font-bold md:text-2xl md:leading-36 md:text-gray-800">
              Convert to PDF
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products2.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="bg-white border border-gray-200 rounded-md transition-all duration-300 p-4 hover:shadow-lg"
              >
                <Image
                  width={0}
                  height={0}
                  className="h-65 w-65 object-center"
                  src={product.imageSrc}
                  alt=""
                />
                <h3 className="mt-4 font-bold text-2xl leading-7 text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-5 text-gray-600 overflow-hidden max-w-[200px] text-wrap">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
