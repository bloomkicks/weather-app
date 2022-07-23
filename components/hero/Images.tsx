import Image from "next/image";
import Box from "@mui/material/Box";

const Images = () => {
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
        }}
        src="/Cloud-background.png"
        component="img"
      ></Box>
      <Box
        position="absolute"
        src="/weather/heavy-rain.png"
        component="img"
      ></Box>
    </Box>
  );
};

export default Images;
