import React from "react";
import Logo from "../../components/logo/Logo";
import ThemeToggler from "../../components/theme-toggle/ThemeToggler";
import { Grid } from "@mui/material";
import NavbarToggler from "../../components/navbar-toggle/NavbarToggler";

const Header = () => {
  return (
    <Grid
      container
      id="headerContainer"
      sx={{ background: (theme) => theme.palette.background.paper }}
    >
      <Grid item sm={3} md={2}>
        <Logo />
      </Grid>
      <Grid item sm={1} md={0.5}>
        <NavbarToggler />
      </Grid>
      <Grid item sm={7} md={9}>
        {/* Empty Grid */}
      </Grid>
      <Grid item sm={1} md={0.5}>
        <ThemeToggler />
      </Grid>
    </Grid>
  );
};

export default Header;
