import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import toast from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error(`${title} has been uninstalled.`);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedApps = [...installedApps];

    if (value === "sizeAsc") {
      sortedApps.sort((a, b) => a.size - b.size);
    } else if (value === "sizeDesc") {
      sortedApps.sort((a, b) => b.size - a.size);
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex flex-col justify-center items-center py-16 gap-3 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B2447]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>

      <div className=" p-5 rounded-xl  ">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">
            {installedApps.length} {installedApps.length === 1 ? "App" : "Apps"}{" "}
            Found
          </h2>

          <select
            onChange={handleSortChange}
            value={sortOption}
            className="select select-bordered select-sm"
          >
            <option value="none">Sort Options</option>
            <option value="sizeAsc">Sort By Size (Small → Large)</option>
            <option value="sizeDesc">Sort By Size (Large → Small)</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            You haven't installed any apps yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl  hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{app.title}</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1 text-green-600">
                        <CgSoftwareDownload className="text-lg" />
                        {Math.round(app.downloads / 1000000)}M
                      </span>
                      <span className="flex items-center gap-1 text-yellow-500">
                        <FaStar /> {app.ratingAvg}
                      </span>
                      <span className="text-gray-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-sm bg-green-500 hover:bg-green-600 text-white font-semibold"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
