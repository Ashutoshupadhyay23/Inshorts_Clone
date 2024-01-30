import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  
  const [category, setCategory] = useState('general')

  return (
    <div className='App'>
      <Navbar setCategory={setCategory} />
    </div>
  )
}

export default App
