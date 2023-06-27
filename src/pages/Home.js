import React, { useEffect } from "react";
import "../style/Home.scss";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getLocalStorData, getUserDetails, getUsersData } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const userid = getLocalStorData("userId");
  useEffect(() => {
    if (userid) {
      dispatch(getUserDetails(userid));
    }
    dispatch(getUsersData());
  }, []);
  return (
    <>
      <div className="hero-page">
        <div className="content">
          <h1>CHAT TO KEELE STUDENTS</h1>
          <p>
            Our team of friendly student ambassadors are here to answers your
            questions about life at Keele.
          </p>
          <div>
            <h3>Start your chat </h3>
            <FaArrowRight
              style={{
                marginLeft: "10px",
                color: "rgb(235, 234, 234)",
                fontSize: "13px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="main-page">
        <div className="main-content">
          <div className="left-content">
            <h1>WE'RE KEELE AND WE'RE DIFFERENT</h1>
            <hr />
            <p>
              Founded in 1949 by A.D.Lindsay, former Vice-Chancellor of the
              University of Oxford Keele has always been different from other
              universities - and seventy years later, we still are.
            </p>
            <div>
              <h3>CHAT TO OUR STUDENTS</h3>
              <FaArrowRight
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              />
            </div>
          </div>
          <div className="right-content">
            <FaGraduationCap className="gra-icon" />
            <h2>FIND A COURSE FOR YOU</h2>
            <select>
              <option>Study level</option>
            </select>
            <input type="text" placeholder="Keyword search" />
            <div>
              <h3>Foundation years A-Z</h3>
              <FaArrowRight
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div>
              <h3>Undergradute courses A-Z</h3>
              <FaArrowRight
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div>
              <h3>Postgradute courses A-Z</h3>
              <FaArrowRight
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              />
            </div>
            <div>
              <h3>Postgradute research A-Z</h3>
              <FaArrowRight
                style={{
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
