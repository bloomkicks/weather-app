import {
  WeatherCondition,
  type WeatherStats,
} from "../../models/weather-stats";
import { DateTime } from "luxon";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const WeatherCard = ({
  minTemperature = "No",
  maxTemperature = "No",
  weatherCondition = WeatherCondition.CLOUDY,
  index,
}: WeatherStats & { index: number }) => {
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
          src={`./weather-conditions/${weatherCondition}.png`}
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

export default WeatherCard;
