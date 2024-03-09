import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      <Grid sx={{ mt: "50px", p: "20px", minHeight: "calc(100vh - 50px)" }}>
        <Outlet />
      </Grid>
    </>
  );
};

export default Layout;
