import React, { useState } from 'react';
import Child from './Child';

function Parent(props) {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)
    const getItems = () => {
        console.log(counttwo+1, counttwo-1)
        for (let i=0; i<100000000;i++){}
        return[counttwo+1, counttwo-1]
    }


    return (
        <div>
            <h1>useCall back</h1>
            <button onClick={()=> setCountone(countone+1)}>count One: {countone}</button>
            <button onClick={()=> setCounttwo(counttwo+1)}>count Two: {counttwo}</button>

            <Child getItems={getItems}/>
        </div>
    );
}

export default Parent;