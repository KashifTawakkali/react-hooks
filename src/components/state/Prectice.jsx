import React, { useState } from 'react'

export default function Prectice() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(prevCount=>prevCount+1)
        setCount(prevCount=>prevCount+1)

        // setCount(count +1)
        

    }
    function decrement (){
        setCount(count-1)
    }
  return (
    <>
    <h1>React Hook useState</h1>



    <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
    </>
  )
}
