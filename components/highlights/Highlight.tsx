import { WindDirections } from "../../models/highlights";
import type { Highlight as IHighlight } from "../../models/highlights";
import Arrow from "@mui/icons-material/ArrowBack";
import React from "react";
import { Stack, Paper, Typography } from "@mui/material";

import HumidityScale from "./HumidityScale";

const Highlight = ({
  title,
  value,
  measureUnit,
  wind,
}: IHighlight) => {
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
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h2">
          {value}
          <Typography
            variant="inherit"
            color="text.secondary"
            display="inline-block"
            ml={1}
          >
            {measureUnit}
          </Typography>
        </Typography>
        {measureUnit === "%" && (
          <HumidityScale value={parseInt(value)} />
        )}
        {!!wind && (
          <Typography color="text.secondary">
            <Arrow
              sx={{
                display: "inline-block",
                mr: 1,
                verticalAlign: "middle",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "text.secondary",
                transform: `rotate(${
                  WindDirections[wind.direction]
                })`,
              }}
            />
            <span style={{ verticalAlign: "middle" }}>
              {wind.direction}
            </span>
          </Typography>
        )}
      </Stack>
    </Paper>
  );
};

export default Highlight;
