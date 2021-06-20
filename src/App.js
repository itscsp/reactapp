import React from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NoMatch from "./Components/NoMatch";
import {Layout} from "./Components/Layout";
import NavigationBar from './Components/NavigationBar';
import { Jumbotron } from "./Components/Jumbotron";

function App() {
  return (
    <>
    <NavigationBar />
    <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
