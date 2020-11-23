import React from 'react'
import Item from '../Item/index'

import './style.css'

function ListOfElements({List, removeItem}) {
    return(
        <section>
            <ul className="list-container">
                {List.map(item => <Item key={item.id} itemName={item.name} itemId={item.id} removeItem={removeItem} />)}
            </ul>
        </section>
    )
}

export default ListOfElements