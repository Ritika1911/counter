
import './App.css';
import navbar from './components/nav'
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component{
  render() {
  return (
    <React.Fragment>
      <navbar/>
      <main class="container">
        <Counters/>
      </main>
    </React.Fragment>
    
  );
}
}

export default App;
