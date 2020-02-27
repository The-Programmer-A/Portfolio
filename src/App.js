import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { BudgetApplication } from "./BudgetApplication";
import { MyBookStore } from "./MyBookStore";
import { MyFitnessTracker } from "./MyFitnessTracker";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";


function App() {
  return (
      <React.Fragment>
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
      </React.Fragment>
  );
}

export default App;
