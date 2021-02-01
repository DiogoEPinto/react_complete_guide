import React, { Component } from 'react';

import classes from './App.css';        // Look up 'CSS Modules' to see how to enable this. Depends on React Scripts version.
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  // This is a class based component. Therefore we have access to lifecicle hooks.
  constructor(props) {
    super(props);   // Basically executes the constructor of the component we're extending. Makes sure everything is initialized correctly.
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'snj1', name: 'Max', age: 28 },
      { id: 'djs2', name: 'Manu', age: 29 },
      { id: 'snl3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /* componentWillMount() {                   
    console.log.apply('[App.js] componentWillMount');
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();   // Basically copies the existing data into a new persons.
    const persons = [...this.state.persons];        // Spreads the data into a new array. (confusing)
    persons.splice(personIndex, 1);                 // What does Splice do???
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]        // We fetch an object and use spread to distribute it's properties to a new object.
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];    // This is important. We create a new object this way. 
    persons[personIndex] = person;              // Later on it allows us to compare the arrays and not the pointers.

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <withClass classes={classes.App}>

        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>

        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} /> : null}
        {persons}

      </withClass>
    );

  }
}

export default App;   // High order componente. A component wraping another component.
