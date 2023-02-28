import React, {useState} from "react";
import useLogger from './useLogger'

function Test(){
    const [name, setName] = useState("")
    useLogger(name)
    return (
        <div>
            <h1>useDebug React Hook</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}
export default Test;
