import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios"


const SideNav = () => {







  return (
    <div className=" side w-[20%] h-full shrink-0 bg-slate-800 p-4 ">
      <div className=" w-full flex flex-col gap-4 ml-4">
        <div className="flex gap-1 text-2xl justify-start items-center w-full ">
          <i className="ri-tv-fill  "></i>
          <div>Movie App</div>
        </div>
        <div className="categories flex flex-col ">
          <div className="text-lg font-bold mb-4">News Feed</div>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-gemini-fill"></i>
            <div className="" >Trending</div>
          </Link>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-user-heart-line"></i>
            <div className="" >Polpular</div>
          </Link>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-movie-fill"></i>
            <div className="" >Movie</div>
          </Link>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-tv-2-fill"></i>
            <div className="" >TV Shows</div>
          </Link>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-team-fill"></i>
            <div className="" >People</div>
          </Link>
        </div>
        <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-zinc-100 to-transparent "></div>
        <div className="categories flex flex-col ">
          <div className="text-lg font-bold mb-4">Website Information</div>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-git-repository-fill"></i>
            <div className="" >About Us</div>
          </Link>
          <Link
            className="flex items-center gap-1 p-2.5 hover:bg-slate-700 duration-200 rounded-lg w-fit min-w-[80%]"
            to={"/trending"}
          >
            <i className="ri-phone-fill"></i>
            <div className="" >Contact Us</div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SideNav;
