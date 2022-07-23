import { LinearProgress } from "@mui/material";
import React from "react";

const HumidityScale = ({ value }: { value: number }) => {
  console.log(value);

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      color="info"
      sx={{
        width: "100%",
        height: "10px",
        borderRadius: "10px",
        backgroundColor: 'white'
      }}
    />
  );
};

export default HumidityScale;
