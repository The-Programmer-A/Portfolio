import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { BudgetApplication } from "./BudgetApplication";
import { MyBookStore } from "./MyBookStore";
import { MyFitnessTracker } from "./MyFitnessTracker";
import { NoMatch } from "./NoMatch";
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
              <Route exact path="/" component={Home} />
              <Route path="/budget" component={BudgetApplication} />
              <Route path="/bookstore" component={MyBookStore} />
              <Route path="/fitnesstracker" component={MyFitnessTracker} />
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
