import React, { useReducer, useState } from 'react';
const initialState={count:0}
const reducer = (state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'DECREMENT':
            return{count:state.count-1}
        case 'INCREMENT':
            return{count:state.count+1}
        default:
            return state    
    }
}


function Redusors(props) {
    const [count, setCount] =useState(0)
    const [state, dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            <h1>useReduser</h1>
            <h4>useState with useReduser</h4>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
            {state.count}
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
        </div>
    );
}

export default Redusors;