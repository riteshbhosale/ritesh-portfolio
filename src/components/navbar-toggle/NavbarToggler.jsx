import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Box, IconButton } from "@mui/material";
import { setNavbar } from "../../redux/slices/navbarSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state?.navbar?.open);

  const handleNavbar = () => {
    dispatch(setNavbar(!open));
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <IconButton onClick={handleNavbar}>
          {open && <Icon icon="mdi:hamburger-open" />}
          {!open && <Icon icon="mdi:hamburger-close" />}
        </IconButton>
      </Box>
    </>
  );
};

export default NavbarToggler;
