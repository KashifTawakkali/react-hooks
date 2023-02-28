import React, { useRef } from 'react';
import Fareed from './Fareed';

function Kashif() {
    const ref = useRef()
    return (
        <div>
            <h1>UseImperative Hook</h1>

            <Fareed ref={ref}/>

            <button onClick={()=>ref.current.increment()}>Parent Click</button>
        </div>
    );
}

export default Kashif;