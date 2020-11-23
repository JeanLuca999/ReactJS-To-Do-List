import React, {useState} from 'react'

import './style.css'

function InputElements({addItem}) {
    const [itemName, setItemName] = useState('')

    return(
        <main className="input-container">
            <input 
                type="text"
                className="input-text" value={itemName}
                onChange={event => setItemName(event.target.value)} />
            <button
                type="button"
                className="input-buttonAdd"
                onClick={()=>addItem(itemName)}>
                Add
            </button>
        </main>
    )
}

export default InputElements