import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "react-dropdown/style.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const [isLoggin, setIsLoggin] = useState(true);

  return (
    <div className=" ">
      <div className="h-20 flex items-center justify-between pr-2">
        <div className="flex flex-1 justify-between gap-2 items-center px-2">
          <Link to="/">
            <img
              src="../logo-no-background.svg"
              alt=""
              className="h-16 w-16 md:h-20 md:w-20 lg:w-24 lg:h-24"
            />
          </Link>
          <form className="flex items-center gap-2 border  rounded-full bg-white">
            <input
              type="text"
              placeholder="Search..."
              className={`rounded-full h-10 sm:w-[300px]  sm:block outline-none p-2 transition duration-300`}
            />

            <button type="submit">
              <MagnifyingGlassIcon className="h-3 w-3 sm:h-6 sm:w-6 font-semibold text-slate-700 m-2" />
            </button>
          </form>
        </div>
        <div className=" flex items-center sm:gap-2 mr-2 ">
          <Link to="/cart/1">
            <ShoppingCartIcon className="h-6 w-6 hidden  sm:block  text-slate-700" />
          </Link>
          {!isLoggin ? (
            <div className="hidden sm:flex gap-2 px-2">
              <Link
                to="/signup"
                className=" border px-4 py-2 rounded-full bg-black text-white hover:opacity-90">
                Signup
              </Link>
              <Link
                to="signin"
                className=" border px-4 py-2 rounded-full bg-black text-white hover:opacity-90">
                Signin
              </Link>
            </div>
          ) : (
            <Link className=" z-20 flex items-center justify-center rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]  bg-slate-200 px-2">
              <Menu>
                <MenuButton>
                  GB
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>
                    <Link to={"/cart/1"}>My Cart</Link>
                  </MenuItem>
                  <MenuItem>LogOut</MenuItem>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Contact Us?</MenuItem>
                </MenuList>
              </Menu>
            </Link>
          )}
        </div>
      </div>
      {!isLoggin ? (
        <div className=" w-full flex sm:hidden justify-center gap-2">
          <Link
            to="/signup"
            className=" border px-4 py-2 rounded-full bg-black text-white hover:opacity-90">
            Signup
          </Link>
          <Link
            to="/signin"
            className=" border px-4 py-2 rounded-full bg-black text-white hover:opacity-90">
            Signin
          </Link>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex bg-white shadow-lg pt-3 sm:pt-0">
        <ul className="flex justify-center w-full text-xs gap-6 sm:gap-8 sm:text-[1rem] p-1 text-slate-700 ">
          <Link to="/games">
            <li className=" font-semibold underline_text">PS4</li>
          </Link>
          <li className=" font-semibold underline_text">XBOX</li>
          <li className=" font-semibold underline_text">PS5</li>
          <li className=" font-semibold underline_text">GAMES</li>
          <li className=" font-semibold underline_text">ACCESSORY</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
