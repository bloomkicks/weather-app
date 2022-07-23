import Location from "../../models/Location";
import { List, ListItemButton } from "@mui/material";
import React from "react";

const locations = [
  new Location("Ufa, Russia"),
  new Location("Saint Petersburg, Russia"),
  new Location("Moscow, Russia"),
  new Location("San Francisco, USA"),
];

const LocationList = ({}: { locations?: Location[] }) => {
  return (
    <List sx={{ width: "92%" }}>
      {locations.map((location) => (
        <ListItemButton
          sx={{
            px: 2,
            py: 2.5,
            border: "1px solid",
            borderColor: "transparent",
            ":hover": {
              borderColor: "text.secondary",
            },
            my: 3,
          }}
        >
          {location.location}
        </ListItemButton>
      ))}
    </List>
  );
};

export default LocationList;
