import { Link, NavLink } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import logo from "/resources/logo.png";
import "./Navigation.css";
const Nav = () => {
  const links = (
    <>
      <div>
        <NavLink className="cBtn" to={"/"}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="cBtn" to={"/apartments"}>
          Apartments
        </NavLink>
      </div>
      <div>
        <NavLink className="cBtn" to={"/updateProfile"}>
          Update Profile
        </NavLink>
      </div>
      <div>
        <NavLink className="cBtn" to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </>
  );

  return (
    <nav className="navbar backdrop:blur-lg bg-white/40 z-50 px-3 md:px-14 lg:px-28 fixed top-0 left-0 right-0 h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <LuMenuSquare className="text-5xl text-[#FAB63E]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-32 text-[#112D4E]"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" cursor-pointer text-xl">
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end text-white  font-medium">
        <Link to={'/logIn'} className="px-4 py-2 bg-[#FAB63E] text-base flex items-center gap-2">
        <FaCircleUser className="text-3xl" />Log In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
