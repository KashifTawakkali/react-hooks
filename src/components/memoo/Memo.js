import React, { useMemo, useState } from 'react';



function Memo(props) {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)
    function increment(){
        setCountone(countone+1)
    }
    function decrement (){
        setCounttwo(counttwo-1)
    }
    const isEven = useMemo(() => {
        for(let i=0;i<1000000000; i++){}
        return countone%2===0
    },[countone])
    return (
        <div>
            <h1>React Hook useMemo</h1>
            <button onClick={increment}>Count one 0{countone}</button>
                               {isEven()?'Even':'Odd'}<br/>
            <button onClick={decrement}>Count two 0{counttwo}</button>
        </div>
    );
}

export default Memo;