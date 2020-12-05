import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, DetailPage } from '../pages';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </Router>
  )
}