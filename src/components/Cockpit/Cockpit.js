import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {       // Without any further coding this triggers on every re-render. Combines didMount and didUpdate.
        console.log('[Cockpit.js] useEffect');
        // Http request...
        /*  const timer = setTimeout(() => {
             alert('Saved data to cloud!');  // Fake http request. 
         }, 1000); */
        toggleBtnRef.current.click();
        return () => {
            /*  clearTimeout(timer);  */           // Cleanup timer. 
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
    if (props.personsLength <= 2) {    // Change text color if number of persons is lower than or equals to 2.
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {    // Change text weight if number of persons is lower than or equals to 1.
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);     // React will save a snapshot of the component and only re-render if the content changes.