import React, { useContext } from 'react';
import { FirstName } from './AA';
import { LastName } from './AA';


function DD(props) {
    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)
    return (
        <div>
        {firstName}
        {lastName}
        </div>
    );
}

export default DD;