import React, { useState } from 'react'
import Header from './components/Header/index'
import InputElements from './components/InputElements/index'
import ListOfElements from './components/ListOfElements/index'

function App() {
  const [List, setList] = useState([])
  const [countItems, setCountItems] = useState(0)

  const addItem = (newItem) => {
    if(newItem !== '')
      setList([...List,{name:newItem, id:countItems}])
      setCountItems(countItems+1)
  }

  const removeItem = (id) => {
    setList(List.filter(item => item.id !== id))
  }
  return (
    <>
      <Header />
      <InputElements addItem={addItem}/>
      <ListOfElements List={List} removeItem={removeItem}/>
    </>
  )
}

export default App;
