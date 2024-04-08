import { Link, NavLink } from "react-router-dom";
import navicon from "/resources/list.png";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '/resources/logo.png'
import './Navigation.css'
// import { RiLoginBoxLine } from "react-icons/ri";
// import { RiLogoutBoxLine } from "react-icons/ri";
const Nav = () => {
  const links = (
    <>
      <NavLink to={'/'} className="cBtn ">Home</NavLink>
      <NavLink to={'/property'} className="cBtn ">property</NavLink>
      <NavLink to={'/'} className="cBtn ">contact</NavLink>
    </>
  );

  return (
    <nav className="navbar backdrop-blur-lg bg-white/40 z-50 px-3 md:px-14 lg:px-28 fixed top-0 left-0 right-0 h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <img src={navicon} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-36"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className=" cursor-pointer text-xl"><img className="w-24" src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end text-white text-3xl">
        <FaRegCircleUser />
        {/* <RiLogoutBoxLine />
        <RiLoginBoxLine /> */}
      </div>
    </nav>
  );
};

export default Nav;
