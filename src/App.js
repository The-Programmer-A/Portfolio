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
  .topContainer{
    max-width:100%;
    max-height:100%;
  }
`;

function App() {
  return (
    <Styles>
      <div className='topContainer'>
        <NavigationBar />
        <Layout>
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
        </Layout>
        <Jumbotron />
      </div>
    
    </Styles>
  );
}

export default App;
