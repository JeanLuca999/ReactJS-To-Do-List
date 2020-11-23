import React from 'react'

function Item({itemName, itemId, removeItem}) {
    return(
        <div>
            <p>
                {itemName}
            </p>
            <button
                type="button"
                onClick={() => removeItem(itemId)}>
                remove
            </button>
        </div>
    )
}

export default Item