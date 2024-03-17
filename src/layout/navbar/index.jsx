import React from "react";
import { navbarConfig } from "./navbarConfig";
import { Box, Stack } from "@mui/material";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <>
      <Box component="nav">
        <Stack
          sx={{
            height: 1,
            width: '100%',
          }}
        >
          {navbarConfig.map((list) => (
            <NavList
              key={list.title}
              data={list}
              depth={0}
              hasChild={!!list.children}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
