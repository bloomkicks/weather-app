import {
  Drawer,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
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
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ alignSelf: "flex-end" }}
        >
          Close
        </Button>
        <TextField
          label="Location"
          type="text"
          variant="outlined"
          sx={{
            mt: 3,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.primary",
            },
          }}
        />
        <LocationList />
      </Stack>
    </Drawer>
  );
};

export default SearchDrawer;
