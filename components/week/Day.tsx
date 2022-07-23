import { Box, Stack, Typography, Paper } from "@mui/material";
import TDay from "../../models/Day";
import React from "react";

const Day = (day: TDay) => {
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
          src={day.weather.imgSrc}
          component="img"
          height="65px"
          position="relative"
          left="-5px"
          bottom="-5px"
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
