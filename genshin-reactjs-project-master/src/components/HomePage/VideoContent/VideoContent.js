import React, { useState } from 'react'
import './videoContent.css';
import './ActiveVideo/activeVideo.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function VideoContent() {
    
    const [openVideo, setOpenVideo] = useState(false);

    const handleOpenVideo = () => {
        setOpenVideo(!openVideo)
    }
    
    return (
        <div>
            <div className="video-content">
                <video className="video-bg" loop="loop" muted="muted" autoPlay preload="auto">
                    <source src="videos/video1.mp4"/>
                </video>
                <div className="video-container">
                    <div className="video-nav" 
                        style={{  
                            backgroundImage: "url(" + "./images/video-content/slider-play-btn.png" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                    >
                        <button onClick={handleOpenVideo} className="play-video-btn">
                        <PlayArrowIcon className="play"/>
                        </button>   
                    </div>
                    <p>Chính thức ra mắt trên nhiều nền tảng, đến tải ngay</p>
                    <ul className="platform-download">
                        <li><a href="/"><img src="/images/video-content/platform-download-1.png" alt="key" /></a></li>
                        <li><a href="/"><img src="/images/video-content/platform-download-2.png" alt="key" /></a></li>
                        <li><a href="/"><img src="/images/video-content/platform-download-3.png" alt="key" /></a></li>
                        <li><a href="/"><img src="/images/video-content/platform-download-4.png" alt="key" /></a></li>
                    </ul>
                    <div className="arrow-downs">
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>
                </div>

                {openVideo && <div className="pv-active" onClick={handleOpenVideo}>
                    <div className="content-wrap">
                        <div className="img-wrap">
                            <iframe src="https://www.youtube.com/embed/62xgOohZbLY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <img 
                            onClick={handleOpenVideo}
                            className="close-btn" src="/images/video-content/close-btn.png" alt="img" />
                    </div>
                </div>}
                  

            </div>
        </div>
    )
}

export default VideoContent
