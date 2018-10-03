import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CurrencyTable from './components/CurrencyTable/CurrencyTable';
import CurrencyDetails from './components/CurrencyDetails/CurrencyDetails';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import InputComponent from './components/InputComponent/InputComponent';
import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <div className="container">
          <Route path="/dashboard" component={CurrencyTable}/>
          <Route path="/details/:id" component={CurrencyDetails}/>
          <Route path="/search" component={InputComponent}/>
        </div>
      </div>
    );
  }
  
}

export default withRouter(App);
