import React, { useState } from 'react'
import "./components.css"

const SearchBar = ({search,setSearch}) => {
    
   
  return (
    <div className='search-bar-container'>
        {search}
        <input type="text" placeholder='Search Some body' value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar