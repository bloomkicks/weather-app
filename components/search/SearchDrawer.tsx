import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Close from "@mui/icons-material/Close";

import LocationList from "./LocationList";
import SearchField from "./SearchField";

const SearchDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [locations, setLocations] = useState<string[]>([]);

  async function searchHandler(search: string) {
    if (search === "CLEAR_SEARCH") return;
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}&q=${search}`
      );
      const locations = await response.json();
      setLocations(
        locations.map((loc: any) => `${loc.name}, ${loc.country}`)
      );
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  return (
    <Drawer
      open={open}
      keepMounted
      sx={{
        "& .MuiPaper-root": {
          width: { xs: "100%", md: "460px" },
        },
      }}
      hideBackdrop={true}
    >
      <Stack
        sx={{
          px: 3,
          py: 3,
          alignItems: "stretch",
        }}
      >
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            alignSelf: "flex-end",
            color: "text.primary",
            transition: "transform 500ms ease-in-out",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Close fontSize="large" />
        </IconButton>
        <SearchField onSearch={searchHandler} />
        <LocationList locations={locations} onSetLocation={onClose} />
      </Stack>
    </Drawer>
  );
};

export default SearchDrawer;
