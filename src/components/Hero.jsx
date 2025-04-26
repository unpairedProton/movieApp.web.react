import React, { useEffect } from "react";
import axios from "../utils/axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Hero = () => {
  const [wallpaper, setWallpaper] = useState("");

  const getHeroWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day?language=en-US`);
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    //   console.log("random result",(Math.random() * data.results.length).toFixed());
      
    //   console.log(randomData);
    //   console.log(data);
      
      
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeroWallpaper();
  }, []);

  return wallpaper.backdrop_path?(
    
    <div className=" relative mt-2 w-full h-[60vmin]">
      <img
        className="w-full h-full object-cover object-center"
        src={
          wallpaper.backdrop_path &&
          `https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path}`
        }
        alt=""
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, .5), rgba(0, 0, 0, .8))",
        }}
      >
        <div className="flex flex-col  hover:opacity-100 duration-300 p-2 w-[80%] opacity-70 pl-4 justify-end mb-[4vw]">
          <div  className="text-2xl font-bold mb-2 ">
            {wallpaper.title ||
              wallpaper.name ||
              wallpaper.original_name ||
              wallpaper.original_title}
          </div>
          <p>
            {wallpaper.overview && wallpaper.overview.slice(0, 200)}...
            <Link className="text-blue-400">more</Link>
          </p>
          <div className="flex gap-x-2.5">
            <div className="flex gap-1">
              <i className="ri-calendar-check-line"></i>
              <div>{wallpaper.release_date || "No information"}</div>
            </div>
            <div className="flex gap-1">
              <i className="ri-clapperboard-fill"></i>
              <div>{wallpaper.media_type && wallpaper.media_type.toUpperCase()}</div>
            </div>
          </div>
          <button className="p-3 mt-2 cursor-pointer bg-purple-800 w-fit rounded-md" > Watch Trailer</button>
        </div>
      </div>
    </div>
  ):(<Loading/>)
};

export default Hero;
