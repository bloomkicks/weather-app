import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MyLocation from "@mui/icons-material/MyLocation";

const CityActions = ({
  onOpenSearch,
}: {
  onOpenSearch: () => void;
}) => {
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
      >
        <MyLocation fontSize="large" />
      </IconButton>
    </Stack>
  );
};

export default CityActions;
