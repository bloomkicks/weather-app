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
            position: "relative",
            transition: "border-color 100ms ease-out",
            "&::after": {
              content: '""',
              width: "0.6rem",
              height: "0.6rem",
              border: "3.05px solid transparent",
              display: "none",
              position: "absolute",
              transition: "border 5s ease-out",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%) rotate(45deg)",
            },
            ":hover": {
              borderColor: "text.secondary",
              "&::after": {
                display: "block",
                borderTopColor: "text.primary",
                borderRightColor: "text.primary",
              },
            },
            my: 1,
          }}
        >
          {location.location}
        </ListItemButton>
      ))}
    </List>
  );
};

export default LocationList;
