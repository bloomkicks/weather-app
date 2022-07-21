import {
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import MyLocation from "@mui/icons-material/MyLocation";
import LocationOn from "@mui/icons-material/LocationOn";
import Images from "./Images";

const Hero = () => {
  return (
    <Stack
      component="article"
      alignItems="center"
      width={{ sx: "100%", md: "460px" }}
      pt={2}
      pb={3}
    >
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2 }}
      >
        <Button variant="contained">Search for places</Button>
        <IconButton
          sx={{ color: "text.primary", bgcolor: "primary.main" }}
          size="small"
        >
          <MyLocation fontSize="large" />
        </IconButton>
      </Stack>
      <Images />
      <Typography variant="h1">
        15
        <Typography
          variant="h2"
          component="span"
          color="text.secondary"
        >
          ℃
        </Typography>
      </Typography>
      <Typography
        color="text.secondary"
        variant="h2"
        mb={4}
        mt={2}
      >
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
        <LocationOn />
        Helsinki
      </Typography>
    </Stack>
  );
};

export default Hero;
