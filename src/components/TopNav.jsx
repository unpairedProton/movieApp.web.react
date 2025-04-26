import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNav = () => {
    const [query, setQuery] = useState("");
    console.log(query);
    


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
        { query && <i onClick={()=>setQuery("")} className="ri-close-line pr-2"></i>}
      </div>
      <div className="absolute flex flex-col  bg-slate-800 w-[60%] top-[4vw] m-h-[18vmax] overflow-y-scroll">
        {/* <Link className="w-full p-3 border-b-1 border-slate-500 bg-slate-700 hover:bg-slate-600" >Home</Link> */}
        
        
      </div>
    </div>
  );
};

export default TopNav;
