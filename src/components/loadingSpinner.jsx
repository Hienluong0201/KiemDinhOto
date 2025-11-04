"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      gap={2}
    >
      <CircularProgress size={80} thickness={5} />
      <Typography variant="" color="textSecondary">
        {text}
      </Typography>
    </Box>
  );
}
