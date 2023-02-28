import React, { useEffect, useState } from 'react';

function Child({getItems}) {
    const [items, setItems] = useState(0)
    useEffect(()=>{
        setItems(getItems)
    },[getItems])
    return (
        <div>
            {items && items.map(item=>{
                <div key={item}>{item}</div>
            })}
        </div>
    );
}

export default Child;