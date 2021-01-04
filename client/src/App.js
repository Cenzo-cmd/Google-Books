import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from "./components/pages/main"
// import Search from "./components/SearchBox/search";
// import Header from "./components/Header/header";
// import NavLinks from "./components/HeaderLink/HeaderLink";



function App() {
  return (
    <Router>
     
      <Switch>
        <Route exact path ={["/", "/main"]} >
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
