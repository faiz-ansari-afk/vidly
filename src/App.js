import React, { Component } from "react";
import { Route, Redirect,Switch } from "react-router-dom";
import MovieForm from './components/movieForm'
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found'/>
        </Switch>
      </main>
      </>
    );
  }
}

export default App;
