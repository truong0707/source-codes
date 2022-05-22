import React, { useState, useEffect } from 'react'
import './header.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Audio from './Audio';
import { Link } from 'react-router-dom'

function Main() {

    const [turnOn, setTurnOn] = useState(false)
    const [scroll, setScroll] = useState(false)

        useEffect(() => {
            const scroll = () => {
                if (window.scrollY >= 300) {
                    setScroll(true)
                } else {
                    setScroll(false)
                }
            }
    
            window.addEventListener('scroll', scroll)
    
            //Cleanup function
            return () => {
                window.removeEventListener('scroll', scroll)
            }
        }, [scroll])

        const handleSound = () => (
            setTurnOn(!turnOn)
        ) 
             
    return (

        <div>
                <div className={`row header ${scroll ? 'scroll' : ''}`}>
                    <img 
                        onClick= {handleSound}
                        id='change-song'
                        className={`song-icon ${turnOn ? 'on': 'off'}`}
                        // className="song-icon off"
                        src={`${turnOn ? 'images/header-images/header-image5.png' : 'images/header-images/header-image4.png'}` }
                        alt="Audio"/>
                        {turnOn && <Audio/>}

                    <img className="genshin-img" src="images/header-images/header-image3.png" alt="Genshin-img" />
                    <ul className="nav">
                        <li><a href="/home-page">Trang chủ</a></li>
                        <Link to='news-page'><li className="linkStyle" >Tin tức</li></Link>
                        <Link to='characters-page'><li className="linkStyle">Nhân vật</li></Link>
                        <li>
                            <a href="/home-page">
                                Tư liệu
                                <ArrowDropDownIcon className="dropdown-btn"/>
                            </a>
                            <ul className="subnav">
                                <li><a href="/home-page">Giới Thiệu Game</a></li>
                                <li><a href="/home-page">Thế Giới</a></li>
                                <li><a href="/home-page">Tạp Chí</a></li>
                                <li><a href="/home-page">Chuyện Tranh</a></li>
                            </ul>
                        </li>
                        <li><a href="/home-page">Khác</a></li>
                        <Link to='todo-list'><li className="linkStyle">Kế Hoạch</li></Link>
                        <li><a href="/home-page">Trung Tâm Nạp</a></li>
                        <li><a href="/home-page">Mã quà</a></li>
                    </ul> 
                    
                    <div className="login-info">
                        <ul className="login-dropdown">
                            <li>
                                <a href="/home-page">
                                    quanp****com
                                    <ArrowDropDownIcon className="dropdown-btn"/>
                                </a>
                                <ul className="sub-login-dropdown">
                                    <li><a className="a-top" href="/home-page">Thẻ Thông Hành</a></li>
                                   <Link to='/'><li className="sign-out-btn">Thoát</li></Link> 
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <img className="download-btn" src="images/header-images/header-image6.png" alt="Tải game" />
                   
                </div>
               </div>
    )
}

export default Main
