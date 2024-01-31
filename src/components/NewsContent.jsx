import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'

const NewsContent = () => {
  return (
    <Container maxWidth='md'>
        
        <div className='content'>
            <div className='downloadMessage'>

                <span className='downloadText'>
                    For the best experience use <b>inshorts</b> app on your smartphone
                </span>

                <img 
                 alt="app store"
                 height="80%"
                 src="https://assets.inshorts.com/website_assets/images/playstore.png" 
                 
                />

                <img
                 alt="play store"
                 height="80%" 
                 src="https://assets.inshorts.com/website_assets/images/appstore.png" 
                 
                />

            </div>
        </div>

    </Container>
  )
}

export default NewsContent