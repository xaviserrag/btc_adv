import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Do you want to get into Bitcoin?</h2>
          <h4>Here is how :)</h4>

          <div>To buy bitcoins you have to create an account in an exchange.</div>
          <div>You can sign up in coin base, one of the easiest platforms to buy bitcoins or ethereum.</div>
          <div>Sign to coinbase using the following link and earn 10$ for free!<a href="https://www.coinbase.com/join/594346e99ef1db0cf3c0e45e">HERE!</a></div>

          <a href="https://www.coinbase.com/join/594346e99ef1db0cf3c0e45e">Get 10$ for free!</a>
      </div>
    );
  }
}

export default App;
