import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import type { Highlight as IHighlight } from "../../models/highlights";
import Highlight from "./Highlight";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HighlightList = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather
  );

  return (
    <Box mt={6} px={3} component="article" mb={7}>
      <Typography variant="h2">{"Today's Highlights"}</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mt={0}
      >
        {currentWeather.highlights.map(
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
    </Box>
  );
};

export default HighlightList;
