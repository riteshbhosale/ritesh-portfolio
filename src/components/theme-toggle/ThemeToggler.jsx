import React from "react";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/themeSilce";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  const toggleTheme = (mode) => {
    if (mode === "light") {
      dispatch(setTheme("dark"));
    }

    if (mode === "dark") {
      dispatch(setTheme("light"));
    }
  };

  return (
    <>
      {themeMode === "light" && (
        <IconButton title={"Dark Mode"} onClick={() => toggleTheme(themeMode)}>
          <Icon icon="ic:sharp-dark-mode" />
        </IconButton>
      )}
      {themeMode === "dark" && (
        <IconButton title={"Light Mode"} onClick={() => toggleTheme(themeMode)}>
          <Icon icon="material-symbols:light-mode-outline-rounded" />
        </IconButton>
      )}
    </>
  );
};

export default ThemeToggler;
