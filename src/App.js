import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import {BrowserRouter as Router, Switch, Route,NavLink} from "react-router-dom";
import AddPage from "./components/Addpage";
import AllComponentsPage from './ComposableComponents/AllComponents';
import MovieDetailPage from './MovieDetailPage';


export default class App extends Component {
  render() {
    return (
      <div>
      
      <Router>
        <div className="App">
        <nav>
      <NavLink exact activeClassName="active" to="/">movies</NavLink>
      
    </nav>
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


  
  
 
  