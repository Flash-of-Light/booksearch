import React, { Component, fragment } from "react";
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import BookSearch from "./components/BookSearch/search";
import Results from "./components/Results/results";
import Jumbotron from "./components/Jumbotron/jumbotron";
import "./App.css";

class Searchpage extends Component {
  render() {
    return (
      <fragment>
        <Navbar />
        <Jumbotron />
        <BookSearch />
        <Results />

      </fragment>
    );
  }
}

export default Searchpage;