import { Icon } from "@iconify/react";
import { paths } from "../../routes/path.js";


export const navbarConfig = [
  {
    title: "home",
    path: paths.home.root,
    icon: <Icon icon="ic:baseline-home" width="24" height="24" />,
  },
  {
    title: "projects",
    path: paths.home.projects.root,
    icon: <Icon icon="grommet-icons:projects" width="16" height="16" />,
    children: [
      {
        title: "chat app",
        path: paths.home.projects.chatApp,
        icon: <Icon icon="bi:chat-text" width="24" height="24" />,
      },
    ]
  },
];
