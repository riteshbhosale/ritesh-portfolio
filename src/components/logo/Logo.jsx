import React from "react";
import { Box, Typography } from "@mui/material";


const Logo = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <img src="logo192.png" alt="logo" width={"32px"} height={"32px"} />
      <Typography>Ritesh Bhosale</Typography>
    </Box>
  );
};

export default Logo;
