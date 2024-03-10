import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./header/Header";
import { useSelector } from "react-redux";

const Layout = () => {
  const open = useSelector((state) => state?.navbar?.open);
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      <Grid container id="mainContainer">
        {open && (
          <Grid item sm={2} id="navbarContainer" >
            Navbar
          </Grid>
        )}
        <Grid item sm={open ? 10 : 12} id="bodyContainer">
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
