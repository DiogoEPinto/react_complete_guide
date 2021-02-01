import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
    });

    let btnClass = '';
    if (props.showPersons) {            // Change button color if persons is showing or not.
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (props.persons.length <= 2) {    // Change text color if number of persons is lower than or equals to 2.
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {    // Change text weight if number of persons is lower than or equals to 1.
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;