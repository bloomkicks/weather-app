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
          mt: -1,
          flex: "1 0 150%",
          width: "auto",
          maxWidth: 700,
          maxHeight: { xs: 350, sm: "100%" },
          objectFit: "contain",
          objectPosition: "center",
        }}
        src="./cloud-background.png"
        alt=""
        component="img"
      ></Box>
      <Box
        position="absolute"
        src={`./weather-conditions/${weatherCondition}.png`}
        alt={weatherCondition}
        component="img"
        width="290px"
        sx={{ ml: -2 }}
      ></Box>
    </Box>
  );
};

export default Images;
