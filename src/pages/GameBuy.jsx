import React from "react";
import { FaStar } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { FaWindows } from "react-icons/fa";

const GameBuy = () => {
  return (
    <div className=" flex flex-col my-6">
      <div className=" flex flex-col mx-4  gap-2 border">
        <h1 className=" text-3xl lg:text-4xl xl:text-5xl">Alan Wake 2</h1>
        <div className=" flex items-center gap-1">
          <div className="flex items-center ">
            <FaStar className=" h-4 w-5 lg:h-5 lg:w-6" />
            <FaStar className=" h-4 w-5 lg:h-5 lg:w-6" />
            <FaStar className=" h-4 w-5 lg:h-5 lg:w-6" />
            <FaStar className=" h-4 w-5 lg:h-5 lg:w-6" />
            <FaStar className=" h-4 w-5 lg:h-5 lg:w-6" />
          </div>
          <div className=" flex items-center px-1 rounded-md  bg-slate-800 text-white">
            <span className=" text-sm lg:text-base">4.8</span>
          </div>
        </div>
      </div>
      <div className=" my-4 mx-6 border border-slate-100 md:hidden"></div>
      <div className="md:flex md:justify-center md:mt-10 md:gap-4 mx-4">
        <div className="flex justify-center h-fit w-full md:w-1/2 mt-2 lg:w-1/2 xl:w-8/12   ">
          <img
            src="https://cdn2.unrealengine.com/egs-alanwake2-remedyentertainment-g1a-03-award-1920x1080-9e0de20157f9.jpg"
            alt="game"
            className=" w-[337px] h-[189px] sm:w-[500px] sm:h-[300px] lg:w-[650px] lg:h-[400px] xl:w-[1100px] xl:h-[700px] mx-auto"
          />
        </div>
        <div className=" flex flex-col md:border-l-2 md:border-slate-100 lg:w-1/2 lg:px-6 xl:px-24 xl:w-4/12 xl:mt-[200px] ">
          <div className=" flex  items-center justify-center  gap-4 mt-4">
            <span className="flex items-center px-2 py-1 rounded-md bg-blue-500 font-semibold text-white text-[10px]">
              -20%
            </span>
            <p className=" line-through text-slate-500 font-semibold">
              &#8377;2000
            </p>
            <p className="font-semibold text-slate-800">&#8377;1000.89</p>
          </div>
          <div className="flex flex-col mx-6 mt-6 gap-2">
            <button className=" bg-blue-600 font-semibold text-white py-4 rounded-lg">
              BUY NOW
            </button>
            <button className=" border border-slate-500  font-semibold text-black py-4 rounded-lg">
              ADD TO CART
            </button>
            <button className="flex gap-1 items-center justify-center border border-slate-500 py-1 rounded-lg ">
              <LuPlusCircle />
              <span className=" text-[11px] font-semibold">
                ADD TO WISHLIST
              </span>
            </button>
          </div>
          <section className="flex flex-col mx-6 font-semibold">
            <div className="flex justify-between md:gap-2 mt-4 border-b-2 p-2">
              <p className=" text-slate-500">Developer</p>
              <p>Remedy Entertainment</p>
            </div>
            <div className="flex justify-between mt-4 border-b-2 p-2">
              <p className=" text-slate-500">Publisher</p>
              <p>Epic Games Publishing</p>
            </div>
            <div className="flex justify-between mt-4 border-b-2 p-2">
              <p className=" text-slate-500">Release Date</p>
              <p>10/27/23</p>
            </div>
            <div className="flex justify-between mt-4 border-b-2 p-2">
              <p className=" text-slate-500">Platform</p>
              <p className=" text-slate-700">
                <FaWindows className=" h-5 w-5" />
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className=" mx-6 mt-4  ">
        <h2 className=" font-semibold">Description</h2>
        <p className=" max-w-[60ch] text-sm mt-2 sm:text-[1rem] ">
          Alan Wake 2: Winner of Time Magazine's Game of the Year; Washington
          Post's Game of the Year; The Game Awards' Best Game Direction, Best
          Art Direction and Best Narrative; and Golden Joystick's Critics'
          Choice Award.
        </p>
      </section>
      <section className=" mx-6 mt-4 ">
        <h3 className=" font-semibold mb-2 text-lg ">
          Alan Wake 2 System Requirements
        </h3>
        <div className="border p-3 flex justify-between font-semibold rounded-md md:pl-20 ">
          <div className=" py-2">
            <h4 className=" text-slate-500 mb-4">Minimum</h4>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows OS</h4>
              <p className=" text-sm text-black">Windows 10/11 64-bit</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Processor</h4>
              <p className=" text-sm text-black">
                Intel i5-7600K or AMD equivalent
              </p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Memory</h4>
              <p className=" text-sm text-black">16 GB</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Storage</h4>
              <p className=" text-sm text-black">SSD with 90 GB free space</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Graphics</h4>
              <p className=" text-sm text-black">
                GeForce RTX 2060 / Radeon RX 6600
              </p>
            </div>
          </div>

          <div className="py-2 md:pr-20">
            <h4 className="text-slate-500  mb-4">Recommended</h4>
            <div>
              <h4 className="text-slate-500   pb-1">Windows OS</h4>
              <p className=" text-sm text-black">Windows 10/11 64-bit</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Processor</h4>
              <p className=" text-sm text-black">
                Intel i5-7600K or AMD equivalent
              </p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Memory</h4>
              <p className=" text-sm text-black">16 GB</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Storage</h4>
              <p className=" text-sm text-black">SSD with 90 GB free space</p>
            </div>
            <div className="mb-2">
              <h4 className="text-slate-500 ">Windows Graphics</h4>
              <p className=" text-sm text-black">
                GeForce RTX 2060 / Radeon RX 6600
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameBuy;
