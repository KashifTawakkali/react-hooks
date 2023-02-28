import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Fareed= forwardRef((prop, ref) =>{
    const [count, setCount] = useState(0)
    useImperativeHandle(ref, ()=> ({
        increment
    }))
    function increment (){
        setCount(count+1)
    }
    function decrement (){
        setCount(count-1)  
    }
    return (
        <div>
            <button onClick={increment}>Click me!</button>
            {count}

            <button onClick={decrement}>Click me!</button>
        </div>
    );
})

export default Fareed;