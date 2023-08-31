import type { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { updateWeatherThunk } from "../../store/weatherSlice";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MyLocation from "@mui/icons-material/MyLocation";

const LocationActions = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
  const dispatch: AppDispatch = useDispatch();

  function setCurrentLocationHandler() {
    dispatch(updateWeatherThunk("auto:ip"));
  }

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: 2, maxWidth: 600, mx: "auto" }}
    >
      <Button variant="contained" onClick={onOpenSearch}>
        Search for places
      </Button>
      <IconButton
        sx={{
          color: "text.primary",
          bgcolor: "primary.main",
          ":hover": {
            bgcolor: "primary.dark",
          },
        }}
        size="small"
        onClick={setCurrentLocationHandler}
        aria-label="Your location"
      >
        <MyLocation fontSize="large" />
      </IconButton>
    </Stack>
  );
};

export default LocationActions;
