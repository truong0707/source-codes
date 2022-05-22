import React from 'react'
import Header from './Header/Header'
import VideoContent from './VideoContent/VideoContent'
import NewsContent from './NewsContent/NewsContent'
import CharacterIntroduction from './CharacterIntroduction/CharacterIntroduction'
import Footer from './Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function index() {
    return (
        <>
        <div id="main">
            <Header/>
            <VideoContent/> 
            <NewsContent/>
            <CharacterIntroduction/>
            <Footer/>
            <ScrollToTop/>
        </div>
        </>
    )
}

export default index
