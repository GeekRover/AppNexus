import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import AllApps from "./AllApps";
import ErrorIcon from "/assets/App-Error.png";



const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

const filteredApps = useMemo(() => {
    let currentApps = data;

    if (search) {
      const lowerCaseSearchTerm = search.toLowerCase();
      currentApps = data.filter((app) =>
        app.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    
    let sortedApps = [...currentApps];

    if (sort === 'high-low') {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (sort === 'low-high') {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }

    return sortedApps;
  }, [data, search, sort]);

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

          <div className="flex-row-reverse flex gap-3 items-center">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search Apps"
                className="foc"
              />
            </label>
            <select
              value={sort}
              onChange={handleSortChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm w-full md:w-auto text-gray-700"
              aria-label="Sort applications"
            >
              <option value="none" disabled>
                Sort by Downloads
              </option>
              <option value="high-low">Downloads (High-Low)</option>
              <option value="low-high">Downloads (Low-High)</option>
            </select>
          </div>
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
