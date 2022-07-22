import { Box, Stack, Typography, Paper } from "@mui/material";
import Weather from "../../models/Weather";
import React from "react";

const Day = (day: {
  stringDate: string;
  imgSrc: string;
  temperature: { min: number; max: number };
}) => {
  return (
    <Paper
      component="section"
      sx={{ width: "125px", height: "175px" }}
    >
      <Stack
        alignItems="center"
        width="100%"
        height="100%"
        py={2}
        spacing={1}
      >
        <Typography variant="body2">{day.stringDate}</Typography>
        <Box
          src={day.imgSrc}
          component="img"
          width="65%"
          pl="-23px"
          pt="-10px"
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={3}
          pt={3}
        >
          <Typography variant="body2">
            {day.temperature!.max}℃
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {day.temperature!.min}℃
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Day;
