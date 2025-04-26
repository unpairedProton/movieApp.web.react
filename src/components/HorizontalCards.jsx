import React from "react";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import noimg from "../assets/noimg.png";
import { Link } from "react-router-dom";

const HorizontalCards = () => {
  const [mediaItems, setMediaItems] = useState([]);

  const getHorizontalItems = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day?language=en-US`);
      setMediaItems(data.results);
      console.log("Media Items", data.results);
      
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getHorizontalItems();
  }, []);

  return (
    <div className="w-full flex p-2 flex-col ">
      <div>Trending</div>
      <div className="flex gap-3 overflow-x-scroll">
        {mediaItems &&
          mediaItems.map((item, i) => (
            <div
              key={i}
              className="w-[15vw] flex-col gap-1 shrink-0 flex h-[20vw] rounded-lg overflow-hidden bg-slate-800"
            >
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full object-cover"
                  src={
                    item.backdrop_path || item.profile_path || item.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path ||
                          item.profile_path ||
                          item.poster_path
                        }`
                      : noimg
                  }
                  alt=""
                />
              </div>
              <div className="w-full px-2 flex flex-col">
                <div className="text-lg font-semibold">
                  {item.title || item.name}
                </div>
                <p className="text-sm">
                {item.overview && item.overview.slice(0, 50)}...
                <Link className="text-blue-400">more</Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
