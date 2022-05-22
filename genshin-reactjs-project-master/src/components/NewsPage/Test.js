import React, { useState, useEffect } from 'react'
import './Test.css'

function Test() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/news')
        .then(res => res.json())
        
        .then(news => setNews(news))
    }, [])

    return (
        <div>
             <ul className="ul-list">
                {news.map(item => (
                    <li className="li-list" key={item.id}>{item.title}</li>
                ))}               
            </ul>
        </div>
    )
}

export default Test
