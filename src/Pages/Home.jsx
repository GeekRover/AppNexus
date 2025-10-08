import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import hero from '../../public/assets/hero.png'
import { Suspense } from "react";
import Trending from "../Components/Trending";
const dataPromise = fetch('appData.json').then(res => res.json())
const Home = () => {
  return (
    <div>
      <section className="flex flex-col max-w-7xl mx-auto justify-center items-center gap-6 text-center my-10">
        <h1 className="text-4xl md:text-7xl font-black">
          We Build <br /> <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-[#627382] text-sm md:text-base">At AppNexus.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <span className="flex gap-3">
            <button className="btn "> <FaGooglePlay /> Google Play</button>
            <button className="btn"> <FaAppStoreIos />App Store</button>
        </span>
      </section>
      {/* heroimg section */}
      <section className="max-w-7xl mx-auto flex items-center justify-center">
        <img src={hero} alt="" />
      </section>
      {/* feature */}
      <section className="w-full bg-purple-700 text-white flex flex-col text-center justify-center gap-10 items-center md:py-20 mb-20">
            <h1 className="font-bold text-5xl">Trusted by Millions, Built for You</h1>
            <div className="flex flex-col md:flex-row gap-10  md:gap-36">
                <span className="space-y-4">
                    <h1>Total Downloads</h1>
                    <h1 className="font-extrabold text-6xl">29.6M</h1>
                    <h1>21% more than last month</h1>
                </span>
                <span className="space-y-4">
                    <h1>Total Reviews</h1>
                    <h1 className="font-extrabold text-6xl">906K</h1>
                    <h1>46% more than last month</h1>
                </span>
                <span className="space-y-4">
                    <h1>Active Apps</h1>
                    <h1 className="font-extrabold text-6xl">132+</h1>
                    <h1>31 more will Launch</h1>
                </span>
            </div>
      </section>
      {/* trending Apps */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
            <h1 className=" text-3xl md:text-5xl font-bold ">Trending Apps</h1>
            <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div>
            <Suspense fallback={<h1>Loading....</h1>}>
                <Trending dataPromise={dataPromise}></Trending>
            </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;
