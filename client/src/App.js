import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from "./components/pages/main"
import Favorites from "./components/pages/favorites";


function App() {
  return (
    <Router>
     
      <Switch>
        <Route exact path ={["/", "/main"]} >
          <Main />
        </Route>
        <Route exact path = "/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
