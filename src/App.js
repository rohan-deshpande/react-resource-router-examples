import "./App.css";

import { RouteComponent, Router } from "@atlaskit/router";

import { Nav } from "./components";
import React from "react";
import { createBrowserHistory } from "history";
import { routes } from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <main className="App">
      <Router routes={routes} history={history}>
        <header className="App-header">
          <Nav />
        </header>
        <section className="App-body">
          <RouteComponent />
        </section>
      </Router>
    </main>
  );
}

export default App;
