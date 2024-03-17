import { alpha, styled } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, depth, theme }) => {
  const subItem = depth !== 0;

  const deepSubItem = depth > 1;

  const activeStyles = {
    root: {
      color:
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : theme.palette.primary.light,
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    sub: {
      color:
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : theme.palette.primary.light,
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
  };

  return {
    // Root item
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    minHeight: 1,
    color: theme.palette.text.secondary,

    // Active root item
    ...(active && {
      ...activeStyles.root,
    }),

    // Sub item
    ...(subItem && {
      minHeight: 1,
      // Active sub item
      ...(active && {
        ...activeStyles.sub,
      }),
    }),

    // Deep sub item
    ...(deepSubItem && {
      paddingLeft: theme.spacing(depth),
    }),
  };
});

export const StyledIcon = styled(ListItemIcon)(({ active, size, theme }) => ({
  width: size,
  height: size,
  alignItems: "center",
  justifyContent: "center",
  color: active && theme.palette.primary.main,
}));
