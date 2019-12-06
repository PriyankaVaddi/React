import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPage from "./components/Addpage";
import AllComponentsPage from './ComposableComponents/AllComponents';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={AllComponentsPage} />
            <Route path="/AddPage" component={AddPage} />
          </Switch>
        </div>
      </Router>
    );
  

  }}