import React, { useRef, useEffect, useLayoutEffect } from 'react';

function Lay(props) {
    let ref = useRef('green')
    useEffect(()=> {
        // window.scrollBy(0,500)
    })
    useLayoutEffect(()=> {
        window.scrollBy(0, 500)

        console.log(ref,'useLayoutEffect')
    })
    return (
        <div style={{height:'1000px'}}>
            
        </div>
    );
}

export default Lay;