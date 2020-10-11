import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import PickAPokemon from "./pages/PickAPokemon";
import MyPokemons from "./pages/MyPokemons";
import Pokemons from "./pages/Pokemons";
import Battle from "./pages/Battle";
import BattleResult from "./pages/BattleResult";

function App() {
  return (
    <center>
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route path="/pick-a-pokemon">
              <PickAPokemon />
            </Route>
            <Route path="/my-pokemons">
              <MyPokemons />
            </Route>
            <Route path="/battle">
              <Battle />
            </Route>
            <Route path="/result">
              <BattleResult />
            </Route>
            <Route path="/:address">
              <Pokemons />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </center>
  );
}

export default App;
