const PopularGames = () => {
  return (
    <div className=" border w-fit p-3 my-4 rounded-md" >
      <img
        src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2DeluxeEdition_RemedyEntertainment_Editions_S2_1200x1600-db032e8c839da2be59801023a4cdf083?h=480&quality=medium&resize=1&w=360"
        alt="Games"
        className=" w-[150px] h-[130px] xs:w-[100px] xs:h-[100px] sm:w-[200px] sm:h-[125px] lg:w-[200px] lg:h-[125px] rounded-md"
      />
      <h4 className=" w-[150px] xs:w-[80px] xs:text-sm sm:text-base sm:w-[150px] lg:w-[180px] truncate mt-1 font-semibold text-black">Cross Platform Games</h4>
    </div>
  );
};

export default PopularGames;
