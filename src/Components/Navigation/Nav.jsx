import { Link, NavLink } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import logo from "/resources/logo.png";
import "./Navigation.css";
import { useContext } from "react";
import authConfigContext from "../../Hooks/authConfigContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
AOS.init();
const Nav = () => {
  const { user, handleSignOut } = useContext(authConfigContext);
  const links = (
    <>
      <div>
        <NavLink className="cBtn" to={"/"}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="cBtn" to={"/properties"}>
          Listings
        </NavLink>
      </div>
      {user && (
        <div>
          <NavLink className="cBtn" to={"/updateProfile"}>
            Update Profile
          </NavLink>
        </div>
      )}
      <div>
        <NavLink className="cBtn" to={"/agents"}>
          Agents
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
    <nav
      data-aos="fade-down"
      data-aos-duration="700"
      className="navbar backdrop:blur-lg w-full bg-white/40 z-50 px-5 md:px-14 lg:px-28 fixed top-0 left-0 right-0 h-16"
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <LuMenuSquare className="text-5xl text-[#FAB63E]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-32 backdrop:blur-3xl bg-white/40 text-[#112D4E]"
          >
            {links}
          </ul>
        </div>
        <div data-aos="flip-up" data-aos-duration="1300">
          <Link to={"/"} className=" cursor-pointer text-xl">
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div
        data-aos="flip-up"
        data-aos-duration="1300"
        className="navbar-end text-white  font-medium px-1"
      >
        {user?.photoURL ? (
          <>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-[#FAB63E] text-base flex items-center gap-2"
            >
              <a
                data-tooltip-id="userName"
                data-tooltip-content={user?.displayName}
              >
                <img className="w-7 rounded-full" src={user?.photoURL} onError={(e) => { e.target.src="https://i.ibb.co/HKMPYj4/userImg.png" }} alt="" />
              </a>
              Sign Out
            </button>
            <Tooltip id="userName" place="left-start">
              Hello world!
            </Tooltip>
          </>
        ) : (
          <Link
            to={"/logIn"}
            className="px-4 py-2 bg-[#FAB63E] text-base flex items-center gap-2"
          >
            <FaCircleUser className="text-3xl" />
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
