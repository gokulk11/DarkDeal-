import React from "react";

const Games = () => {
  return (
    <div>
      <div className=" border w-fit">
        <img
          className="w-[163px] h-[218] sm:w-[296px] sm:h-[395] hover:opacity-90"
          src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2DeluxeEdition_RemedyEntertainment_Editions_S2_1200x1600-db032e8c839da2be59801023a4cdf083?h=480&quality=medium&resize=1&w=360"
          alt="game"
        />
        <p className=" text-slate-500 font-semibold text-xs mt-1 sm:text-sm sm:mt-2">EDITION</p>
        <h2 className=" max-w-40 sm:max-w-none font-medium text-slate-700">Alan Wake 2 Deluxe Edition</h2>
        <div className=" flex  items-center justify-between px-1 sm:px-0 mt-2 sm:justify-normal sm:gap-2">
          <div className=" bg-blue-500 w-8 h-5 rounded-md">
              <p className="h-full w-full flex justify-center font-semibold text-white items-center text-[11px] sm:p-3">-50%</p>
          </div>
          <div className="flex flex-col items-end sm:flex-row sm:gap-2">
              <p className=" line-through text-slate-500 font-semibold">&#8377;2000</p>
              <p className="font-semibold text-slate-700">&#8377;1000.89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
