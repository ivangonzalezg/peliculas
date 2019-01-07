import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Saludo } from "./Saludo";
import { Pelicula } from "./Pelicula";
import { Menu } from "./Menu";
import { PaginaNoExiste } from "./PaginaNoExiste";
import { Inicio } from "./Inicio";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} exact />
            <Route path="/peliculas" component={Pelicula} exact />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
