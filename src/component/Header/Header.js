import React, { useContext } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut(navigate);
    };
    const menuItems = (
      <React.Fragment>
        
        <li className="font-medium font-poppins text-yellow-400">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium font-poppins text-yellow-400">
          <Link to="/appointment">Appointment</Link>
        </li>
        <li className="font-medium font-poppins text-yellow-400">
          <Link to="/service">Services</Link>
        </li>
        <li className="font-medium font-poppins text-yellow-400">
          <Link to="/testimonial">Testimonial</Link>
        </li>
        <li className="font-medium font-poppins text-yellow-400">
          <Link to="/about">About</Link>
        </li>
       
        {/* {user?.uid && (
          <li className="font-medium font-poppins hover:text-[#E81C2E]">
            <Link to="/dashboard1">Dashboard</Link>
          </li>
        )} */}
  
        {user?.uid ? (
          <li
            className="font-medium font-poppins text-yellow-400"
            onClick={handleLogOut}
          >
            <button>Logout</button>
          </li>
        ) : (
          <li className="font-medium font-poppins text-yellow-400">
            <Link to="/login">Login</Link>
          </li>
        )}
        {user?.uid && (
          <div
            className="tooltip ml-4 mb-1 lg:tooltip-left md:tooltip-right mt-1 dropdown dropdown-bottom dropdown-end"
            data-tip={user?.displayName}
          >
            <label tabIndex={0}>
              <img
                className="w-[36px] h-[36px] rounded-full mr-5"
                src={user?.photoURL}
                alt=""
              />
            </label>
           
          </div>
        )}
      </React.Fragment>
    );
  
    return (
      <div className="navbar bg-black flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-yellow-400 btn-ghost lg:hidden">
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
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="flex  items-center">
            
            <Link
              to="/"
              className="btn btn-ghost text-yellow-400 font-poppins font-semibold normal-case text-2xl"
            >
              Smooth Styling
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    );
};

export default Header;