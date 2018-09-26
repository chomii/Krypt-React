import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CurrencyTable from './components/CurrencyTable';
import CurrencyDetails from './components/CurrencyDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <nav>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="container">
          <Route path="/dashboard" component={CurrencyTable}/>
          <Route path="/details" component={CurrencyDetails}/>
        </div>
      </div>
    );
  }
}

export default App;
