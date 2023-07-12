import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop:"100px",
      }}
    >
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}
