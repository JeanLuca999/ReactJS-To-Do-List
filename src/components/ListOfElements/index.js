import React from 'react'

function ListOfElements({List}) {
    return(
        <section>
            <ul>
                {List.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </section>
    )
}

export default ListOfElements