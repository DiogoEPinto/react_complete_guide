import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {       // Without any further coding this triggers on every re-render. Combines didMount and didUpdate.
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');  // Fake http request. 
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);    // This will only run the first time. With '[props.persons]' it would run if it detects changes to 'persons'.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
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