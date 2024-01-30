import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent'
import axios from 'axios'

function App() {
  
  const [category, setCategory] = useState('general')

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`);

    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='App'>
      <Navbar setCategory={setCategory} />

      <NewsContent />

    </div>
  )
}

export default App
