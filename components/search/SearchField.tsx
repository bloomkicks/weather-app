import { Stack, Box, Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useRef } from "react";

const SearchField = ({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) => {
  const searchRef = useRef<HTMLInputElement>();

  const changeHandlerDebounce = () => {
    let timeout: NodeJS.Timeout | null = null;
    return function () {
      const value = searchRef.current!.value;
      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(
        () => onSearch(value.length > 2 ? value : "CLEAR_SEARCH"),
        500
      );
    };
  };
  const clickHandler = () => {
    onSearch(searchRef.current!.value);
  };

  return (
    <Stack
      direction="row"
      mt={3}
      sx={{
        justfiyContent: "stretch",
        alignItems: "stretch",
      }}
      spacing={1}
    >
      <Box position="relative" width="100%">
        <TextField
          placeholder="Find weather for your city"
          type="text"
          variant="outlined"
          size="small"
          inputRef={searchRef}
          inputProps={{
            onChange: changeHandlerDebounce(),
          }}
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
              pl: "42px",
            },
          }}
        ></TextField>
        <Search
          fontSize="medium"
          sx={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-48%)",
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
