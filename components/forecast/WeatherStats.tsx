import { DateTime } from "luxon";
import { Box, Stack, Typography, Paper } from "@mui/material";
import {
  WeatherCondition,
  type WeatherStats as IWeatherStats,
} from "../../models/weather-stats";
import React from "react";

const WeatherStats = ({
  minTemperature = "No",
  maxTemperature = "No",
  weatherCondition = WeatherCondition.CLOUDY,
  index,
}: IWeatherStats & { index: number }) => {
  const date = DateTime.now().plus({ day: index });

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
        <Typography variant="body2">
          {date.toFormat("ccc, LLL dd")}
        </Typography>
        <Box
          src={`/weather/${weatherCondition}.png`}
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
          <Typography variant="body2">{maxTemperature}℃</Typography>
          <Typography variant="body2" color="text.secondary">
            {minTemperature}℃
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default WeatherStats;
