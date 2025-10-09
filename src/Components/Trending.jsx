import { Link } from "react-router";
import Tapps from "./Tapps";

const Trending = ({ appData }) => {
  const data = appData;
  const dataLimit = data.slice(0, 8);

  return (
    <div className="grid md:grid-cols-4  items-center gap-5">
      {dataLimit.map((data) => (
        <Tapps key={data.id} data={data}></Tapps>
      ))}
    </div>
  );
};

export default Trending;
