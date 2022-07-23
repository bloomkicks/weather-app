import { Grid, Typography } from "@mui/material";
import Day from "./Day";
import TDay from "../../models/Day";
import React from "react";

const Week = ({ days }: { days: TDay[] }) => {
  return (
    <Grid
      container
      component="article"
      justifyContent="center"
      spacing={3}
      px={3}
      sx={{
        width: "100%",
        ml: -1,
        mt: 3,
      }}
    >
      {days.map((day: TDay) => (
        <Grid item key={day.stringDate}>
          <Day {...day} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Week;
