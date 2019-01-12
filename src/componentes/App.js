import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Saludo } from "./Saludo";
import { Pelicula } from "./Pelicula";
import { Menu } from "./Menu";
import { PaginaNoExiste } from "./PaginaNoExiste";
import { Inicio } from "./Inicio";
import { Callback } from "./Callback";
import { Cargando } from "./Cargando";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu {...this.props}/>
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} exact />
            <Route path="/peliculas" component={Pelicula} exact />
            <Route path="/callback" component={Callback} exact />
            <Route path="/cargando" component={Cargando} exact />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
