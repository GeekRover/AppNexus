import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import AllApps from "./AllApps";
import ErrorIcon from '/assets/App-Error.png'


const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredApps = useMemo(() => {
    if (!search) {
      return data;
    }

    const lowerCaseSearchTerm = search.toLowerCase();

    return data.filter((app) =>
      app.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [data, search]);

  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex flex-col justify-center items-center py-20 gap-5 text-center">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </section>
      <section>
        <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-2 items-center mb-5">
          <h1>({filteredApps.length}) Apps Found</h1>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            className="border p-2 rounded-lg"
          />
        </div>
        {filteredApps.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((data) => (
              <AllApps data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <div className="h-[500px] flex flex-col justify-center items-center">
            <img src={ErrorIcon} alt="" />
            <h3 className="text-2xl font-semibold text-gray-700">
              No App Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or check for typos.
            </p>
          </div>
        )}

      </section>
    </div>
  );
};

export default Apps;
