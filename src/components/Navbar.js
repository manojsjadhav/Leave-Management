import React, { useEffect } from "react";
import "../style/Navbar.scss";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  getLocalStorData,
  getUserDetails,
  getUsersData,
} from "../redux/actions";
import { IoIosContact } from "react-icons/io";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userid = getLocalStorData("userId");
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    navigate("/");
  };
  useEffect(() => {
    if (userid) {
      dispatch(getUserDetails(userid));
    }
    dispatch(getUsersData());
  }, []);
  return (
    <div className="container">
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="menu-wrapper">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <div className="dropdown">
            <a className="dropbtn">
              Admin
              <i style={{ marginLeft: "5px" }} className="fa fa-caret-down"></i>
            </a>
            <div className="dropdown-content">
              <Link to="/teachers">Teachers</Link>
              <Link to="/students">Students</Link>
            </div>
          </div>
          <div className="dropdown">
            <a className="dropbtn">
              Leave
              <i style={{ marginLeft: "5px" }} className="fa fa-caret-down"></i>
            </a>
            <div className="dropdown-content">
              <Link to="/leaverequest">Leave request</Link>
              <Link to="/leavereport">Leave report</Link>
            </div>
          </div>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {userid ? (
            <>
              <div className="dropdown icon">
                <a className="dropbtn">
                  <IoIosContact style={{ fontSize: "45px" }} />
                </a>
                <div className="dropdown-content">
                  <Link to="/profile">Profile</Link>
                  <a onClick={handleLogout}>Log Out</a>
                </div>
              </div>
            </>
          ) : (
            <>
              <button className="btn login-btn">
                <Link to="login">Login</Link>
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
