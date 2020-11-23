import React, {useState} from 'react'

import './style.css'

function Item({itemName, itemId, removeItem}) {
    const [checked, setChecked] = useState('')
    return(
        <div>
            <p className={'item-text' + checked}>
                {itemName}
            </p>
            <button
                type="button"
                className="item-button-remove"
                onClick={() => removeItem(itemId)}>
                🔴
            </button>
            <button
                type="button"
                className="item-button-check"
                onClick={() => setChecked(' checked')}>
                ✅
            </button>
        </div>
    )
}

export default Item