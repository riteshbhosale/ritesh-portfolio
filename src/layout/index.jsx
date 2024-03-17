import React from "react";
import { Grid } from "@mui/material";
import Header from "./header/Header";
import { useSelector } from "react-redux";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const open = useSelector((state) => state?.navbar?.open);
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      <Grid container id="mainContainer">
        {open && (
          <Grid item sm={2} id="navbarContainer">
            <Navbar />
          </Grid>
        )}
        <Grid item sm={open ? 10 : 12} id="bodyContainer">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
