import React from 'react'
import Sliders from './Sliders/Sliders'
import './newsContent.css'
import { Link } from 'react-router-dom'

function NewsContent() {
    
    return (
        <div>
            <div className="news"
                style={{
                    backgroundImage: "url(" + "./images/news-images/news-image-1.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            <h3>
                <img id="arrow-to-left" src="/images/news-images/news-arrow.png" alt="news-arrow" />
                Tin Tức
                <img id="arrow-to-right" src="/images/news-images/news-arrow.png" alt="news-arrow" />
            </h3>

            <div className="news-main">

                {/* left content box */}
                <Sliders/>

                {/* right content box */}
                <div className="news-content">
                    
                    <ul className="news-tab-list">
                        <li className="news-tab-item">Mới</li>
                    </ul>

                    <ul className="news-list">
                        <li><a href="/home-page" className="news-item">
                            <p className="news-title">Hướng Dẫn Cách Chơi "Chiến Binh Bí Ẩn"</p>
                            <p className="news-date">20/10/2021</p>    
                        </a></li>
                        <li><a href="/home-page" className="news-item">
                            <p className="news-title">Thông tin quà lưu niệm "Buổi Hoà Nhạc Offline Của Genshin Impact" kỳ II</p>
                            <p className="news-date">19/10/2021</p>    
                        </a></li>
                        <li><a href="/home-page" className="news-item">
                            <p className="news-title">Sự kiện "Chiến Binh Bí Ẩn": Tham gia để mời Giai Điệu Nóng Bỏng - Xinyan (Hoả) về đội!</p>
                            <p className="news-date">19/10/2021</p>    
                        </a></li>
                        <li><a href="/home-page" className="news-item">
                            <p className="news-title">Chiêu mộ streamer Genshin Impact phiên bản mới trên Twitch</p>
                            <p className="news-date">15/10/2021</p>    
                        </a></li>
                        <li><a href="/home-page" className="news-item">
                            <p className="news-title">[Mở Thưởng Sự Kiện] Sự kiện chia sẻ rút thưởng Genshin Impact</p>
                            <p className="news-date">14/10/2021</p>    
                        </a></li>
                    </ul>

                   <Link to='news-page'>
                    <div className="news-more"
                            style={{
                                backgroundImage: "url(" + "./images/news-images/news-more.png" + ")",
                                backgroundPosition: 'left center',
                                backgroundSize: '22px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            Tải Thêm
                        </div>
                   </Link> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default NewsContent
