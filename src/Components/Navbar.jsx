import { Link } from "react-router";
import logo from "../../public/assets/logo.png";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-20 px-2.5 py-5 shadow-lg">
      <span className="flex items-center gap-1 font-bold">
        <img src={logo} className="size-10" alt="" />
        <h1>AppNexus.io</h1>
      </span>
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>Apps</li>
          </Link>
          <Link>
            <li>Installation</li>
          </Link>
        </ul>
      </nav>
      <button className="btn btn-secondary text-base">
        <AiFillGithub />
        <h1>Contribute</h1>
      </button>
    </div>
  );
};

export default Navbar;
