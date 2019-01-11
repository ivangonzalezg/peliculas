import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Saludo } from "./Saludo";
import { Pelicula } from "./Pelicula";
import { Menu } from "./Menu";
import { PaginaNoExiste } from "./PaginaNoExiste";
import { Inicio } from "./Inicio";
import { Callback } from "./Callback";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu {...this.props}/>
          <br/>
          <br/>
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} exact />
            <Route path="/peliculas" component={Pelicula} exact />
            <Route path="/callback" component={Callback} exact />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
