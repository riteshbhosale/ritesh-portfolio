import React from "react";
import "./Header.css";
import Logo from "../../components/logo/Logo";
import ThemeToggler from "../../components/theme-toggle/ThemeToggler";
import { Box, Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid container id="header">
      <Grid item sm={2}>
        <Logo />
      </Grid>
      <Grid item sm={9}>
        {/* Empty Grid */}
      </Grid>
      <Grid item sm={1}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <ThemeToggler />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
