import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent/NewsContent'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import apiKey from './data/Config'
// import './index.css'
import "./App.css";

function App() {
  
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);

      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)

    } catch (error) {
      console.log('error', error)
    }
  }

  // console.log(newsArray)

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore])
  

  return (
    <div className='App'>
      <Navbar setCategory={setCategory} />

      <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadMore} setLoadMore={setLoadMore}/>

      <Footer />

    </div>
  )
}

export default App
