import React from "react";
import { Link } from "react-router-dom";

const TeaLeavePage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      <h1>you are inteligent man 🥳🥳</h1>
      <button className="btn back-btn" style={{marginLeft:"20px"}}>
        <Link to="/" style={{color:"#fff"}}>Please Go Back</Link>
      </button>
    </div>
  );
};

export default TeaLeavePage;
