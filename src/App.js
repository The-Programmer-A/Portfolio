import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BudgetApplication } from "./Pages/BudgetApplication";
import { MyBookStore } from "./Pages/MyBookStore";
import { MyFitnessTracker } from "./Pages/MyFitnessTracker";
import { Eldercare } from "./Pages/Eldercare";
import { NoMatch } from "./Pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import styled from 'styled-components';
import { Jumbotron } from "./components/Jumbotron";


const Styles = styled.div`
`;

function App() {
  return (
    <Styles>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={MyBookStore} />
              <Route path="/budget" component={BudgetApplication} />
              <Route path="/bookstore" component={MyBookStore} />
              <Route path="/fitnesstracker" component={MyFitnessTracker} />
              <Route path="/eldercare" component={Eldercare} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        <Jumbotron />
    </Styles>
  );
}

export default App;
