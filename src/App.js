import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // The 'state' should be used carefully. It is streated as a JS object.
  // It should be used carefully, because changes in 'state' cause the DOM to re-render everything.
  state = {
    //'persons' is a array of JS objects, with different properties.
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  //It's good pratice to name it 'Handler'. 
  switchNameHandler = () => {
    // console.log('Was clicked!');

    // THIS DOESN'T WORK. You cannot mutate state directly.
    // this.state.persons[0].name = 'Maximilian';

    //'setState' accepts a JS Object as a param.
    //It merges whatever we pass it with our existing data.
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
    })
  }

  //'render' is a method of our 'App' class.
  render() {
    return (
      //Remember, react uses JSX and not HTML.
      //When 'this' is called, it is refering to the 'App'.
      <div className="App">
        <h1>Hi, im a React App.</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

  }
}

export default App;
