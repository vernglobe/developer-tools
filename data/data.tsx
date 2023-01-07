import {
  CssIcon,
  HomeIcon, JsonIcon,
} from "../components/Icons";
import { CssMinify } from "../components/center-content/CssMinify";

import { JsonMinify } from "../components/center-content/JsonMinify";

export const SIDEBAR_DATA_DASHBOARD = [
  {
    id: 1,
    name: "JSON Beautify",
    path: "/jsonbeautify",
    icon: <JsonIcon />,
    content: <JsonMinify />,
  },
  {
    id: 2,
    name: "CSS Beautify",
    path: "/cssbeautify",
    icon: <CssIcon />,
    content: <CssMinify />,
  },
];
