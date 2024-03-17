import React from "react";
import { Link, ListItemText } from "@mui/material";
import { StyledIcon, StyledItem } from "./styles";
import { Icon } from "@iconify/react";
import RouterLink from "./RouterLink";

const NavItem = ({ item, open, depth, active, ...other }) => {
  const { title, path, icon, children } = item;

  const renderContent = (
    <StyledItem disableGutters active={active} depth={depth} {...other}>
      <StyledIcon active={active}>{icon}</StyledIcon>

      <ListItemText
        primary={title}
        primaryTypographyProps={{
          noWrap: true,
          typography: "body2",
          textTransform: "capitalize",
          fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium",
        }}
        secondaryTypographyProps={{
          noWrap: true,
          component: "span",
          typography: "caption",
          color: "text.disabled",
        }}
      />

      {!!children && (
        <Icon
          icon={
            open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"
          }
        />
      )}
    </StyledItem>
  );

  if (children) {
    return renderContent;
  }

  return (
    <Link component={RouterLink} href={path} underline="none" color="inherit">
      {renderContent}
    </Link>
  );
};

export default NavItem;
