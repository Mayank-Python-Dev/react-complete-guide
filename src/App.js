import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React App!</h1>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hello World!!'))
    // behind the scene react will use this to create element
  }
}
export default App;

