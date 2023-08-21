import { Stack, Box, Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useRef } from "react";

const SearchField = ({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) => {
  const searchRef = useRef<HTMLInputElement>();

  const clickHandler = () => {
    onSearch(searchRef.current!.value);
  };

  return (
    <Stack
      direction="row"
      mt={3}
      sx={{
        justfiyContent: "stretch",
        alignItems: "flex-start",
      }}
      spacing={1}
    >
      <Box position="relative" width="100%">
        <TextField
          placeholder={"Find weather for your city"}
          type="text"
          variant="outlined"
          inputRef={searchRef}
          sx={{
            left: 0,
            top: 0,
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.primary",
            },
            "& .MuiInputBase-input": {
              pl: 6.5,
            },
          }}
        ></TextField>
        <Search
          fontSize="large"
          sx={{
            position: "absolute",
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "text.secondary",
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ py: 1 }}
        onClick={clickHandler}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchField;
