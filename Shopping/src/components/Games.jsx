import { AddIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Games = ({id,title,platform,price,offer,edition,discountPrice,image}) => {
  const [gameData, setGameData] = useState({
      id: id,
      title:title,
      platform:platform,
      price:price,
      offer:offer,
      edition:edition,
      discountPrice:discountPrice,
      image:image
  });


  const { itemCount, currentCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(gameData));
  };

  return (
    <Link to="" className=" cursor-pointer">
      <div>
        <div className="bg-slate-100 w-fit rounded-lg">
          <div className="relative group">
            <img
              className=" rounded-lg w-[163px] h-[218px] sm:w-[296px] sm:h-[395px]  object-fit hover:opacity-90"
              src={image}
              alt="game"
            />
            <Link to="" className=" cursor-pointer" onClick={handleAddToCart}>
              <Tooltip label="Add to Cart">
                <div className="absolute top-3 right-4 invisible group-hover:visible transition-visible duration-300 ease-in-out ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </Tooltip>
            </Link>
          </div>
          <p className=" uppercase bg-slate-800 w-fit rounded-md p-[2px] text-slate-50 font-semibold text-[10px] mt-1 sm:text-sm sm:mt-2">
            {edition}
          </p>
          <h2 className=" max-w-40 sm:max-w-none font-medium text-slate-700">
            {title}
          </h2>
          <div className=" flex  items-center justify-between px-1 sm:px-0 mt-2 sm:justify-normal sm:gap-2">
            {offer && (
              <div className=" bg-blue-500 w-8 h-5 rounded-md">
                <p className="h-full w-full flex justify-center font-semibold text-white items-center text-[11px] sm:p-3">
                  -50%
                </p>
              </div>
            )}
            <div className="flex flex-col items-end sm:flex-row sm:gap-2">
             {offer && (
                <p className=" line-through text-slate-500 font-semibold">
                  &#8377;{discountPrice}
                </p>
              )}
              <p className="font-semibold text-slate-700">&#8377;{price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Games;
