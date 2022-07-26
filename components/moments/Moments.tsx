import MomentItem from "./MomentItem";
import Moment from "../../models/Moment";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Moments = ({ moments }: { moments: Moment[] }) => {
  return (
    <Box mt={6} px={3} component="article" mb={7}>
      <Typography variant="h2">Today's Highlights</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        mt={0}
      >
        {moments.map(
          ({ type, title, value, measureSign, wind }) => (
            <Grid
              item
              width={{ xs: "auto", md: "350px" }}
              maxWidth={{ xs: "500px" }}
              xs={12}
              lg={6}
              key={title + value + measureSign}
            >
              <MomentItem
                type={type}
                title={title}
                value={value}
                measureSign={measureSign}
                wind={wind!}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Moments;
