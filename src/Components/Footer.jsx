import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


const Footer = () => {

  return (
    <div className="bg-blue-700 text-3xl text-white text-center inset-x-0 bottom-0 p-4 flex">
      <div className="">© onlykingKD 2022</div>

      <div className="flex justify-around absolute right-20 w-48">
        <a href="https://github.com/onlykingKD/movie_db_react_app" rel="noreferrer noopener" target="_blank">
          <AiFillGithub />
        </a>
        <AiFillInstagram /> <AiFillFacebook /> <MdEmail />
      </div>
    </div>
  );
};

export default Footer;
