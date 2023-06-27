import React from "react";
import { getLocalStorData } from "../redux/actions";
import PageNotFound from "../components/PageNotFound";

const PriveteRoute = ({ Component }) => {
  const userid = getLocalStorData("userId");
  return <>{userid ? <Component /> : <PageNotFound />}</>;
};

export default PriveteRoute;
