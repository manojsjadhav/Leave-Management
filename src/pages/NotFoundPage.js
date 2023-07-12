import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      <h1>Page not found 404 Error</h1>
      <Link to="/" className="btn back-btn" style={{marginLeft:"20px"}}>Go Back</Link>
    </div>
  );
};

export default NotFoundPage;
