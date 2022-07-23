import SearchField from "./SearchField";
import Close from "@mui/icons-material/Close";
import {
  Drawer,
  IconButton,
  Stack,
  Button,
} from "@mui/material";

import LocationList from "./LocationList";
import React from "react";

const SearchDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
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
            transition: "transform 1s ease-in-out",
            transform: open ? "rotate(450deg)" : "rotate(0deg)",
          }}
        >
          <Close fontSize="large" />
        </IconButton>
        <SearchField onSearch={onClose} />
        <LocationList />
      </Stack>
    </Drawer>
  );
};

export default SearchDrawer;
