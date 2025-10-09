import React from "react";
import { useLoaderData } from "react-router";
import AllApps from "./AllApps";

const Apps = () => {
  const data = useLoaderData()
  return <div className="max-w-7xl mx-auto">
    <section className="flex flex-col justify-center items-center py-20 gap-5 text-center">
      <h1 className="text-5xl font-bold">Our All Applications</h1>
      <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
    </section>
    <section>
      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-2 items-center mb-5">
        <h1>({data.length}) Apps Found</h1>
        <input type="text" placeholder="Search" className="border p-2 rounded-lg"/>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {
          data.map((data) => <AllApps data={data} key={data.id}></AllApps>)
        }
      </div>
    </section>
  </div>;
};

export default Apps;
