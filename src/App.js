import React, { Component } from 'react';

import classes from './App.css';        // Look up 'CSS Modules' to see how to enable this.
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'snj1', name: 'Max', age: 28 },
      { id: 'djs2', name: 'Manu', age: 29 },
      { id: 'snl3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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
      ...this.state.persons[personIndex]    // We fetch an object and use spread to distribute it's properties to a new object.
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses= [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, im a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );

  }
}

// High order componente. A component wraping another component.
export default App;
