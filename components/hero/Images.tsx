import { WeatherCondition } from "../../models/weather-stats";
import Box from "@mui/material/Box";

const Images = ({
  weatherCondition,
}: {
  weatherCondition: WeatherCondition;
}) => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      overflow="hidden"
    >
      <Box
        sx={{
          opacity: 0.2,
          flex: "1 0 150%",
          maxWidth: 700,
        }}
        src="/Cloud-background.png"
        component="img"
      ></Box>
      <Box
        position="absolute"
        src={`/weather/${weatherCondition}.png`}
        component="img"
        width="290px"
        sx={{ ml: -2 }}
      ></Box>
    </Box>
  );
};

export default Images;
