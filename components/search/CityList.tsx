import { List, ListItemButton } from "@mui/material";
import React from "react";

const CityList = ({ cities }: { cities: string[] }) => {
  return (
    <List sx={{ width: "92%" }}>
      {cities.map((city) => (
        <ListItemButton
          key={city}
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
          {city}
        </ListItemButton>
      ))}
    </List>
  );
};

export default CityList;
