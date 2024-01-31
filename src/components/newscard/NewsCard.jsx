import React from 'react'

const NewsCard = ({newsItem}) => {

    console.log(newsItem)

  return (
    <div className='newscard'>
        <img 
         className='newsImage'
         alt={newsItem.title} 
         src = {
             newsItem.urlToImage
              ? newsItem.urlToImage
              : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740"
            } 
        />

        <div className='newsText'>
            <div>
                <span className='title'>
                    {newsItem.title}
                </span>

                <span className='author'>
                    <a href={newsItem.url} target='__blank'>
                        <b>short</b>
                    </a>

                    <span className='muted'>
                        by {newsItem.author ? newsItem.author : "unknown"}
                    </span>
                    
                </span>

            </div>
            <div className='lowerNewsText'>
                <div className="description">
                    {newsItem.description}
                </div>
                <span className="readmore">
                    read more at{" "}
                    <a href={newsItem.url} target="__blank" className="source">
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
            </div>
        </div>

    </div>
  )
}

export default NewsCard