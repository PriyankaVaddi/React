import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPage from "./components/Addpage";
import AllComponentsPage from './ComposableComponents/AllComponents';
import MovieDetailPage from './MovieDetailPage';


export default class App extends Component {
  render() {
    return (
      <div>
      <nav>
      <NavLink exact activeClassName="active" to="/">movies</NavLink>
      
    </nav>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={AllComponentsPage} />
            <Route path="/AddPage" component={AddPage} />
            {/* <Route path=":id" component={MovieDetails}/> */}
            <Route path="/movies/:id" component={MovieDetailPage} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  

  }}


  
  
 
  