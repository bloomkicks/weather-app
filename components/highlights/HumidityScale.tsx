import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const HumidityScale = ({ value }: { value: number }) => {
  return (
    <Stack width="95%" position="relative" sx={{ top: "15px" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={1}
        width="100%"
        position="absolute"
        sx={{ bottom: "100%", left: "0" }}
      >
        {[0, 50, 100].map((scale) => (
          <Typography
            variant="caption"
            color="text.secondary"
            fontSize={12}
            key={scale}
          >
            {scale}
          </Typography>
        ))}
      </Stack>
      <LinearProgress
        variant="determinate"
        value={value}
        color="info"
        sx={{
          width: "100%",
          mx: "auto",
          height: "10px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      />
      <Typography
        variant="caption"
        color="text.secondary"
        alignSelf="flex-end"
        pr={1}
      >
        %
      </Typography>
    </Stack>
  );
};

export default HumidityScale;
