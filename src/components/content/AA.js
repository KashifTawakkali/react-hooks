import React from 'react';
import { createContext } from 'react';
import BB from './BB';
const FirstName = createContext()
const LastName = createContext()


function AA(props) {
    return (
        <div>
            <h1>React hook useContext</h1>
            <FirstName.Provider value='Kashif'>
               <LastName.Provider value=' Patil is learning react with Code with Harry'>
                <BB />
               </LastName.Provider>
            </FirstName.Provider>
        </div>
    );
}

export default AA;

export  {FirstName};
export {LastName};