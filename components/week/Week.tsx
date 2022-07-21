import { Stack, Typography } from "@mui/material";
import days from "../../data/days";
import Day from "./Day";
import React from "react";

const Week = () => {
  return (
    <Stack
      component="article"
      direction="row"
      flexWrap="wrap"
      spacing={3}
      maxWidth={{ xs: "95%", md: "auto" }}
    >
      {days.map((day) => (
        <Day day={day} />
      ))}
    </Stack>
  );
};

export default Week;
