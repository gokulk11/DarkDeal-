import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" bg-black flex items-center justify-between p-4">
      <section className=" flex gap-2">
        <FaFacebook  className="text-white h-6 w-6"/>
        <FaTwitter className="text-white  h-6 w-6" />
        <FaYoutube className="text-white  h-6 w-6" />
      </section>
      <img src="../logo-black.svg" className=" h-8 w-8" alt="" />
    </div>
  );
};

export default Footer;
