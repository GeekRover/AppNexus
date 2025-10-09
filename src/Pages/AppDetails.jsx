import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { CgSoftwareDownload } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
// import { Bar, BarChart, Line, XAxis, YAxis } from "recharts";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";

const AppDetails = () => {
  const data = useLoaderData();
  const chartData = data.ratings;

  // const chartData = dataUse.sort((a, b) => {
  //   const aNum = parseInt(a.name);
  //   const bNum = parseInt(b.name);
  //   return bNum - aNum;
  // });
  const [isInstalled, setIsInstalled] = useState(false);
  const handleInstallClick = () => {
    setIsInstalled(true);
    toast.success(`${data.title} has been installed!`);
  };
  // console.log(chartData);
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
          <div className="divider"></div>
          <div className="flex gap-10 mt-3">
            <section>
              <h1 className="text-4xl">
                <CgSoftwareDownload />
              </h1>
              <h1>Downloads</h1>
              <h1 className="text-4xl font-bold">{data.downloads/100000}M</h1>
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
          <button
            disabled={isInstalled}
            onClick={handleInstallClick}
            className="btn btn-success font-bold text-xl text-white mt-4"
          >
            {isInstalled ? "installed" : `Install Now (${data.size}MB)`}
          </button>
        </span>
      </div>
      <div className="divider"></div>
      {/* rating starts */}
      <div className="mt-5">
        <h1 className="font-semibold text-2xl">Ratings</h1>
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
            >
              <XAxis
                type="number"
                tickFormatter={(value) => `${value / 1000000}M`}
              />
              <YAxis dataKey="name" type="category" />
              <Bar dataKey="count" fill="#FF8C00" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="divider"></div>
        <div className="mt-5 bg-gray-200 p-4 rounded-xl">
          <h1 className="font-semibold text-2xl">Description</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
