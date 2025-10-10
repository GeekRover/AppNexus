import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const Tapps = ({ data }) => {
  return (
    <Link to={`/apps/${data.id}`}>
    <div className="text-center bg-white rounded-xl shadow-xl p-5 space-y-2 ">
      <img src={data.image} className="mx-auto size-[200px] p-5" alt="" />
      <h1>{data.title}</h1>
      <span className="w-full flex justify-between gap-2">
        <h1 className="btn text-green-500 bg-green-50">
          <FiDownload />
          {data.downloads/100000}M
        </h1>
        <h1 className="btn text-orange-500 bg-orange-50">
          <FaRegStar />

          {data.ratingAvg}
        </h1>
      </span>
    </div>
    </Link>
    
  );
};

export default Tapps;
