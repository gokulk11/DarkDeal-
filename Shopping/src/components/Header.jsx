import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart/cartSlice";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
} from "@chakra-ui/react";
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { itemCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    console.log("hello");
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };

  return (
    <div className=" sticky top-0 z-10 bg-white">
      <div className="h-20 flex items-center justify-between pr-2">
        <div className="flex flex-1 justify-between gap-2 items-center px-2">
          <Link to="/" className="flex ">
            <img
              src="../logo-no-background.svg"
              alt=""
              className="h-16 pb-2 w-16 md:h-20 md:w-20 lg:w-24 lg:h-24"
            />
          </Link>
          <form className="flex items-center gap-2 border  rounded-full bg-white">
            <input
              type="text"
              placeholder="Search..."
              className={`rounded-full w-[160px] h-10 sm:w-[300px]  sm:block outline-none p-2 transition duration-300`}
            />

            <button type="submit">
              <MagnifyingGlassIcon className="h-3 w-3 sm:h-6 sm:w-6 font-semibold text-slate-700 m-2" />
            </button>
          </form>
        </div>
        <div className=" flex items-center sm:gap-2 mr-2 ">
          <Link to="/cart" className=" h-9 flex items-center">
            <ShoppingCartIcon className=" h-6 w-6 hidden  sm:block  text-slate-700" />
            <span className="hidden sm:block self-start text-[10px] bg-rose-500 p-[2px] rounded-full text-white font-semibold">
              {itemCount}
            </span>
          </Link>
          {!currentUser ? (
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
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      className="rounded-full"
                      alt="avatar"
                    />
                  ) : (
                    <img
                      src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
                      className="rounded-full"
                      alt="avatar"
                    />
                  )}
                </MenuButton>
                <MenuList bgColor={"gray.500"} color={"white"}>
                  <Link to={"/account"}>
                    <MenuItem bgColor={"gray.500"} _hover={{ bg: "black" }}>
                      Account
                    </MenuItem>
                    <MenuDivider />
                  </Link>
                  <Link to={"/cart"}>
                    <MenuItem bgColor={"gray.500"} _hover={{ bg: "black" }}>
                      My Cart
                    </MenuItem>
                  </Link>
                  <Link to={"/orders"}>
                    <MenuItem bgColor={"gray.500"} _hover={{ bg: "black" }}>
                      My Orders
                    </MenuItem>
                  </Link>
                  <MenuItem
                    onClick={handleSignOut}
                    bgColor={"gray.500"}
                    _hover={{ bg: "black" }}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Link>
          )}
        </div>
      </div>
      {!currentUser ? (
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
          <Link to="/games/ps5">
            <li className=" font-semibold underline_text">PS5</li>
          </Link>
          <Link to="/games/xbox">
            <li className=" font-semibold underline_text">XBOX</li>
          </Link>
          <li className=" font-semibold underline_text">PS4</li>
          <li className=" font-semibold underline_text">PC</li>
          <li className=" font-semibold underline_text">CATEGORIES</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
