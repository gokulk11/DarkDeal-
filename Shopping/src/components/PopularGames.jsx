const PopularGames = () => {
  return (
    <div className=" bg-slate-100 w-fit p-3 my-4 rounded-md">
      <img
        src="https://cdn1.epicgames.com/spt-assets/f4e705da3ed4475d895f64a5ae26eb4b/monke-island-rise-of-the-beast-1c8ax.png?h=480&quality=medium&resize=1&w=360"
        alt="Games"
        className=" w-[150px] h-[130px] xs:w-[100px] xs:h-[100px] sm:w-[200px] sm:h-[125px] lg:w-[200px] lg:h-[125px] xl:w-[300px] xl:h-[150px] rounded-md"
      />
      <h4 className=" w-[150px] xs:w-[80px] xs:text-sm sm:text-base sm:w-[150px] lg:w-[180px] truncate mt-1 font-semibold text-black">
        Cross Platform Games
      </h4>
    </div>
  );
};

export default PopularGames;
