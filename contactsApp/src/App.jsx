import React, { useState } from 'react'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import "./index.css"

const App = () => {
    const [search, setSearch] = useState("")
  return (
    <div className='container'>
        <h1>Contact List App</h1>
        <SearchBar search={search} setSearch={setSearch}/>
        <Form search={search}/>
        
    </div>
  )
}

export default App