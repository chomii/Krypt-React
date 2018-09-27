import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CurrencyTable from './components/CurrencyTable/CurrencyTable';
import CurrencyDetails from './components/CurrencyDetails/CurrencyDetails';
import Navigation from './components/Navigation/Navigation';
import InputComponent from './components/InputComponent/InputComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="container">
          <Route path="/dashboard" component={CurrencyTable}/>
          <Route path="/details" component={CurrencyDetails}/>
          <Route path="/search" component={InputComponent}/>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   getTableData();
  // }
}

export default App;
