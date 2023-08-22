import type { RootState } from "../../store";
import type { Highlight as IHighlight } from "../../models/highlights";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Highlight from "./Highlight";

const HighlightList = () => {
  const todaysHighlights = useSelector(
    (state: RootState) => state.weather.todaysHighlights
  );

  return (
    <Box mt={6} px={3} component="article" mb={7}>
      <Typography variant="h2">{"Today's Highlights"}</Typography>
      {!!todaysHighlights ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
          mt={0}
        >
          {todaysHighlights!.map(
            ({ title, value, measureUnit, wind }: IHighlight) => (
              <Grid
                item
                width={{ xs: "auto", md: "350px" }}
                maxWidth={{ xs: "500px" }}
                xs={12}
                lg={6}
                key={title + value}
              >
                <Highlight
                  title={title}
                  value={value}
                  measureUnit={measureUnit}
                  wind={wind!}
                />
              </Grid>
            )
          )}
        </Grid>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "1.4rem", mt: 1.5, lineHeight: 1.25 }}
        >
          {"There aren't any highlights for today"}
        </Typography>
      )}
    </Box>
  );
};

export default HighlightList;
