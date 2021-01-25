import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {

    return (
      // JSX code:
      <div className="App">
        <h1>Hi, im a React App.</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );  

    // React equivalente code:
    // return React.createElement('div',null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
