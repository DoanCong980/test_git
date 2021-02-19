import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TablePage from "./Table";
import CreatePage from "./Create";

class MainPage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/">
            <TablePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainPage; //exporting a component make it reusable and this is the beauty of react
