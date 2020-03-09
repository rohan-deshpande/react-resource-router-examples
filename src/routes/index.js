import { About, Home } from "../components";
import { aboutResource, homeResource } from "./resources";

import React from "react";
import { Redirect } from "@atlaskit/router";

export const routes = [
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: Home,
    resources: [homeResource]
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: About,
    resources: [aboutResource]
  },
  {
    name: "Default",
    path: "*",
    component: () => <Redirect to="/home" />,
    navigation: false
  }
];
