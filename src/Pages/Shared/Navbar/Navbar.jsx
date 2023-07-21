import { Link } from "react-router-dom";
import logo from "../../../../public/Images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navItems = (
    <>
      <li className="nav-button ">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="nav-button ">
        <Link to={"/alltoys"}>All Toys</Link>
      </li>
      {user && (
        <>
          <li className="nav-button ">
            <Link to={"/"}>My Toys</Link>
          </li>
          <li className="nav-button ">
            <Link to={"/add-toys"}>Add Toys</Link>
          </li>
        </>
      )}
      <li className="nav-button ">
        <Link to={"/"}>Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-[#5b02e2] to-[#9d02c4]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <div className="flex items-center">
            <img className="w-10" src={logo} alt="" />
            <h1 className="text-3xl text-white font-primary uppercase">
              {" "}
              Figlandia
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* to do -> Ekhane profile conditional korte  hobe   */}
        {user ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  title={user?.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="nav-button btn bg-transparent ">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
