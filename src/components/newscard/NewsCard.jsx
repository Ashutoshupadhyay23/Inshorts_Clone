import React from 'react'

const NewsCard = ({newsItem}) => {

    // console.log(newsItem)

    const fulldate = new Date(newsItem.publishedAt); // it will return something like this => Sat  Jan 09 2021  17:45:30  GMT+0530

    let date = fulldate.toString().split(" "); // it will return something like this => ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]

    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;

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
                <br /> {" "}
                <span className='author'>
                    <a href={newsItem.url} target='__blank'>
                        <b>short</b>
                    </a> {" "}

                    <span className='muted'>
                        {" "}
                        by {newsItem.author ? newsItem.author : "unknown"} /{" "}

                        {time
                            ? `${hour - 12}:${date[4].substring(3, 5)} pm`

                            : `${hour}:${date[4].substring(3, 5)} am`} {" "}

                            on {date[2]} {date[1]} {date[3]}, {date[0]
                        }

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