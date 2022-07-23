import Arrow from "@mui/icons-material/ArrowBack";
import React from "react";
import { Stack, Paper, Typography } from "@mui/material";

import Moment from "../../models/Moment";
import HumidityScale from "./HumidityScale";

const MomentItem = (moment: Moment) => {
  return (
    <Paper>
      <Stack
        component="section"
        alignItems="center"
        justifyContent="center"
        mx="auto"
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
          <HumidityScale value={Number(moment.value)} />
        )}
        {moment.type == "wind" && (
          <Typography color="text.secondary">
            <Arrow
              sx={{
                display: 'inline-block',
                mr: 1,
                verticalAlign: 'middle',
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'text.secondary',
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
