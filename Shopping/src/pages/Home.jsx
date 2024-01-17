import React from "react";
import Products from "../components/Products";
import Slider from "../components/Slider";
import HomeSliding from "../components/HomeSliding";

const Home = () => {
  return (
    <div className=" bg-slate-100">
      <Slider />
      <div className="flex flex-row ">
        <div className=" h-screen hidden 2xl:block m-14 shadow-lg shadow-slate-400  bg-rose-800 w-80 bg-[url('https://gmedia.playstation.com/is/image/SIEPDC/ps4-games-keyart-01-en-13dec21?$facebook$')] bg-center ">
          <h1 className=" flex-col h-full text-5xl font-semibold text-white flex items-center justify-center">
            <h2 className=" text-xl">All PS4 Games</h2>
            50% OFF*
          </h1>
        </div>
        <Products />
      </div>
      <HomeSliding />
    </div>
  );
};

export default Home;
