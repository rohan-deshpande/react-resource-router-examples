import { Link } from "@atlaskit/router";
import React from "react";
import { routes } from "../routes";

export const Nav = () => (
  <nav>
    {routes
      .filter(route => route.navigation !== false)
      .map(({ path, name }) => (
        <Link className="App-link" href={path} key={name}>
          {name}
        </Link>
      ))}
  </nav>
);
