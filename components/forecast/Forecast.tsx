import type { RootState } from "../../store";
import type { WeatherStats as IWeatherStats } from "../../models/weather-stats";
import { Grid, Typography } from "@mui/material";
import WeatherStats from "./WeatherStats";
import React from "react";
import { useSelector } from "react-redux";

const Forecast = () => {
  const { forecast } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <Grid
      container
      component="article"
      justifyContent={{ xs: "center", md: "flex-start" }}
      spacing={3}
      px={{ xs: 3, md: 0 }}
      sx={{
        width: "100%",
        ml: { xs: -1, md: 0 },
        mt: 3,
      }}
    >
      {forecast.map((weatherStats: IWeatherStats, i) => (
        <Grid item key={i}>
          <WeatherStats {...weatherStats} index={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
