import React from "react";
import { getLocalStorData } from "../redux/actions";
import { Navigate } from "react-router-dom";

const PriveteRoute = ({ Component }) => {
  const userid = getLocalStorData("userId");
  return <>{userid ? <Component /> : <Navigate to="/login" replace={true} />}</>;
};

export default PriveteRoute;
