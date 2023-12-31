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
      <button className="btn back-btn" style={{ marginLeft: "20px" }}>
        <Link to="/" style={{ color: "#fff" }}>
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
