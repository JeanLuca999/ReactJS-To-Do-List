import React, {useState} from 'react'

function InputElements({AddNewItem}) {
    const [itemName, setItemName] = useState('')

    return(
        <main>
            <input 
                type="text"
                id="text" value={itemName}
                onChange={(event)=>setItemName(event.target.value)} />
            <button
                type="button"
                onClick={()=>AddNewItem(itemName)}>
                Add
            </button>
        </main>
    )
}

export default InputElements