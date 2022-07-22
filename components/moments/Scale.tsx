import { LinearProgress } from "@mui/material";
import React from "react";

const Scale = ({ value }: { value: number }) => {
  console.log(value);

  return (
    <LinearProgress
      variant="determinate"
      value={84}
      color="info"
      sx={{ width: "100%" }}
    />
  );
};

export default Scale;
