import React, {useState} from 'react'

import './style.css'

function InputElements({addItem}) {
    const [itemName, setItemName] = useState('')

    return(
        <main className="container">
            <input 
                type="text"
                className="text" value={itemName}
                onChange={event => setItemName(event.target.value)} />
            <button
                type="button"
                className="buttonAdd"
                onClick={()=>addItem(itemName)}>
                Add
            </button>
        </main>
    )
}

export default InputElements