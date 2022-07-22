import Arrow from "@mui/icons-material/ArrowBack";
import React from "react";
import { Stack, Paper, Typography } from "@mui/material";

import Moment from "../../models/Moment";
import Scale from "./Scale";

const MomentItem = (moment: Moment) => {
  return (
    <Paper>
      <Stack
        component="section"
        alignItems="center"
        justifyContent="center"
        padding={3}
        spacing={3}
      >
        <Typography variant="h3">{moment.title}</Typography>
        <Typography variant="h2">
          {moment.value}
          <Typography
            variant="inherit"
            color="text.secondary"
            display="inline-block"
            ml={1}
          >
            {moment.measureSign}
          </Typography>
        </Typography>
        {moment.type == "humidity" && (
          <Scale value={Number(moment.value)} />
        )}
        {moment.type == "wind" && (
          <Typography color="text.secondary">
            <Arrow
              sx={{
                transform: `rotate(${moment.wind!.rotation!})`,
              }}
            />
            {moment.wind!.direction}
          </Typography>
        )}
      </Stack>
    </Paper>
  );
};

export default MomentItem;
