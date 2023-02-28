import React from 'react';
import { useState } from 'react';

function State(props) {
    const [count, setCount] = useState(()=> {
        console.log('constructor')
        return 0;
    })
    // const [name, updateName] = useState('increment')
    function increment () {
        // setCount(prevCount=>prevCount+1)
        // setCount(prevCount=>prevCount+1)
        setCount(count+1)
    }
    function decrement () {
        // setCount(prevCount=>prevCount-1)
        // setCount(prevCount=>prevCount-1)
        setCount(count-1)
        
    }
    return (
        <div>
            <h2>useState Hook</h2>
            {name}<br/>
               <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
        </div>
    );
}
   
export default State;