import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/axios";
import { useEffect } from "react";
import noimg from "../assets/noimg.png";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState("");

//   console.log(query);
  const getSeaches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
    //   console.log(data.results);
      setSearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSeaches();
  }, [query]);

  return (
    <div className="w-full flex relative justify-center pt-2">
      <div className="w-[60%]  bg-slate-800 rounded-md items-center flex  p-1">
        <i className="ri-search-line p-1 ml-2"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-full h-10  rounded-lg p-2 outline-none"
          placeholder="Search for a movie, tv show, person..."
        />
        {query && (
          <i onClick={() => setQuery("")} className="ri-close-line pr-2"></i>
        )}
      </div>
      <div className="absolute z-10 flex flex-col  bg-slate-800 w-[60%] top-[4vw] max-h-[24vmax] overflow-y-scroll">
        {searches &&
          searches.map((item, index) => {
            return (
              <Link className="w-full p-3  border-b-1 border-slate-500 bg-slate-700 hover:bg-slate-600">
                <div className="w-full flex  gap-5">
                  <div className="w-[5vw] h-[4vw]">
                    <img
                      className="w-full h-full object-contain object-center"
                      src={
                        item.backdrop_path ||
                        item.profile_path ||
                        item.poster_path
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
                  <div className="flex w-full  items-center justify-between">
                    <div>
                      {item.name ||
                        item.title ||
                        item.original_name ||
                        item.original_title}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {item.media_type}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        {/* <Link className="w-full p-3 border-b-1 border-slate-500 bg-slate-700 hover:bg-slate-600" >Home</Link> */}
      </div>
    </div>
  );
};

export default TopNav;
