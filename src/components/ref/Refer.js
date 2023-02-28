import React, { useRef } from 'react';

function Refer(props) {
    const inputRef = useRef()
    function handleRef (){
        console.log(inputRef,'handleRef')
        inputRef.current.focus()
        inputRef.current.value='abc'
    }
    return (
        <div>
            <h1>useRefer Hook</h1>
            <input ref={inputRef} type='text' />
            <button onClick={handleRef}>Click me!</button>
        </div>
    );
}

export default Refer;