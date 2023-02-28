import React, { useEffect, useState } from 'react';

function Users() {
    const[content, setContent] =useState('0')
    const[count,setCount] = useState(0)

    function increment () {
        setCount (count+1 )
    }
    function decrement () {
        setCount (count-1)
    }
    useEffect (()=> {
        console.log('componntDidMount')
    },[content])
    useEffect (()=> {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
        console.log('componntDidupdate')
        return ()=>{
            // cleanup
            console.log('componntDidUnmount')
        }
    },[content])

    return (
        <div>
            <h1>React Hooks useState & useEffect</h1>

            <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
            <button onClick={()=> setContent('Post')}>Post</button>
            <button onClick={()=> setContent('user')}>User</button>
            <button onClick={()=> setContent('comment')}>Comment</button>
            <h2>{content}</h2>

            


        </div>
    );
}

export default Users;