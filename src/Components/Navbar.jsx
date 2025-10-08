import { NavLink, Link } from "react-router";
import logo from "../../public/assets/logo.png";
import { AiFillGithub } from "react-icons/ai";
import './active.css'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-20 px-2.5 py-5 shadow-lg">
      <Link to={'/'}>
        <span className="flex items-center gap-1 font-bold">
        <img src={logo} className="size-10" alt="" />
        <h1>AppNexus.io</h1>
      </span>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-8 font-semibold">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/apps"}>
            <li>Apps</li>
          </NavLink>
          <NavLink to={"/installations"}>
            <li>Installation</li>
          </NavLink>
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
