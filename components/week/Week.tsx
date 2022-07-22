import Weather from "../../models/Weather";
import { Grid, Typography } from "@mui/material";
import Day from "./Day";
import React from "react";

const Week = ({ days }: { days: Weather[] }) => {
  return (
    <Grid
      container
      component="article"
      justifyContent="center"
      spacing={3}
      sx={{
        width: "100%",
        ml: -1,
        mt: 3,
      }}
    >
      {days.map(({ imgSrc, stringDate, temperature }) => (
        <Grid item key={stringDate + imgSrc}>
          <Day
            imgSrc={imgSrc}
            stringDate={stringDate!}
            temperature={temperature!}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Week;
