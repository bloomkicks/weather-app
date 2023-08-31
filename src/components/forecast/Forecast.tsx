import type { RootState } from "../../store";
import type { WeatherStats } from "../../models/weather-stats";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import WeatherCard from "./WeatherCard";

const Forecast = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);

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
        mt: 0,
      }}
    >
      {forecast.map((weatherStats: WeatherStats | null, i) => (
        <Grid item key={i}>
          <WeatherCard {...(weatherStats ? weatherStats : {})} index={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
