import React from "react";
import { useLoaderData } from "react-router";
import { CgSoftwareDownload } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { BarChart } from "recharts";

const AppDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="max-w-7xl mx-auto mb-4">
      <div className="flex md:flex-row flex-col items-center gap-5">
        <img src={data.image} alt="" className="md:size-[350px]" />
        <span className="">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="font-semibold">
            Developed by{" "}
            <span className="text-purple-500 ">{data.companyName}</span>
          </p>
          <hr />
          <div className="flex gap-10 mt-3">
            <section>
              <h1 className="text-4xl">
                <CgSoftwareDownload />
              </h1>
              <h1>Downloads</h1>
              <h1 className="text-4xl font-bold">{data.downloads}</h1>
            </section>
            <section>
              <h1 className="text-4xl">
                <FaRegStar />
              </h1>
              <h1>Average Ratings</h1>
              <h1 className="text-4xl font-bold">{data.ratingAvg}</h1>
            </section>
            <section>
              <h1 className="text-4xl">
                <AiTwotoneLike />
              </h1>
              <h1>Total Reviews</h1>
              <h1 className="text-4xl font-bold">{data.reviews}</h1>
            </section>
          </div>
          <button className="btn btn-success font-bold text-xl text-white mt-4">
            Install Now ({data.size}MB)
          </button>
        </span>
      </div>
      <hr />
      {/* rating starts */}
      <div className="mt-5">
        <h1 className="font-semibold text-2xl">Ratings</h1>
        <div>
         <BarChart width={600} height={400}>

         </BarChart>
        </div>
        <hr />
        <div className="mt-5 bg-gray-200 p-4 rounded-xl">
          <h1 className="font-semibold text-2xl">Description</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
