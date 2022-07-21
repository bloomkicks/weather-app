import {
  Typography,
  Box,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import Images from "./Images";

const Hero = () => {
  return (
    <Stack
      component="section"
      alignItems="center"
      width={{ sx: "100%", md: "460px" }}
    >
      <ButtonGroup fullWidth variant="contained" sx={{ p: 2 }}>
        <Button sx={{ width: "auto" }}>Search for places</Button>
      </ButtonGroup>
      <Images />
      <Typography variant="h1">
        {" "}
        15
        <Typography
          variant="h2"
          component="span"
          color="text.secondary"
        >
          ℃
        </Typography>
      </Typography>
      <Typography color="text.secondary" variant="h2" mb={4} mt={2}>
        Shower
      </Typography>
      <Typography color="text.secondary">
        Today
        <Box component="span" display="inline-block" mx={2}>
          •
        </Box>
        Fri, 5 Jun
      </Typography>
      <Typography variant="h3" color="text.secondary" mt={2}>
        Helsinki
      </Typography>
    </Stack>
  );
};

export default Hero;
