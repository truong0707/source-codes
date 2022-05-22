import React from 'react'
import './footer.css'

function Footer() {
    return (        
        <div className="footer">
                <div className="footer-top">
                    <div className="footer-social-bar">
                        <a className="footer-cial-item" href="https://www.facebook.com/GenshinImpact.vi/"  target="noopener noreferrer">
                            <img className="fticon icon-facebook" src="images/footer-images/logo-fb.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-facebook" src="images/footer-images/logo-fb-hv.png" alt="footer-img"/>
                            
                        </a>

                        <a className="footer-cial-item" href="https://twitter.com/GenshinImpact" target="noopener noreferrer">
                            <img className="fticon icon-twitter" src="images/footer-images/logo-twitter.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-twitter" src="images/footer-images/logo-twitter-hv.png" alt="footer-img"/>
                        </a>
                                        
                        <a className="footer-cial-item" href="http://www.youtube.com/c/GenshinImpact" target="noopener noreferrer">
                            <img className="fticon icon-youtube" src="images/footer-images/logo-yt.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-youtube" src="images/footer-images/logo-yt-hv.png" alt="footer-img"/>
                        </a>
                    
                        <a className="footer-cial-item" href="https://www.instagram.com/genshinimpact/" target="noopener noreferrer">
                            <img className="fticon icon-instagram" src="images/footer-images/logo-instagram.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-instagram" src="images/footer-images/logo-instagram-hv.png" alt="footer-img"/>
                        </a>
                    
                        <a className="footer-cial-item" href="https://discord.gg/genshinimpact" target="noopener noreferrer">
                            <img className="fticon icon-discord" src="images/footer-images/logo-discord.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-discord" src="images/footer-images/logo-discord-hv.png" alt="footer-img"/>
                        </a>                    
                    
                        <a className="footer-cial-item" href="https://www.reddit.com/r/Genshin_Impact" target="noopener noreferrer">
                            <img className="fticon icon-reddit" src="images/footer-images/logo-reddit.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-reddit" src="images/footer-images/logo-reddit-hv.png" alt="footer-img"/>
                        </a>                    
                    
                        <a className="footer-cial-item" href="https://www.hoyolab.com/home?lang=vi-vn&utm_source=officialweb&utm_medium=game&utm_id=2" target="noopener noreferrer">
                            <img className="fticon icon-hoyolab" src="images/footer-images/logo-hoyolab.png" alt="footer-img"/>
                            <img className="fticon fticon-hv icon-hoyolab" src="images/footer-images/logo-hoyolab-hv.png" alt="footer-img" />
                        </a>
                    </div>
                    
                        
                    
                </div>
                
                <div className="footer-cdn">
                    <div className="footer-content">
                        <div className="footer-content_logo">
                            <div className="logoimg">
                                <img src="images/footer-images/mihoyo_1586770772_9709.png" alt="footer-img"/>
                            </div>
                            <div className="logoimg gamee">
                                <img src="images/footer-images/GIEN_1587984203_6764.png" alt="footer-img"/>
                            </div>
                        </div>

                        <div className="footer-content_info">
                            <div className="links">
                                <div className="link1">
                                    <p>|</p>
                                    <a className="link csrt" href="https://genshin.mihoyo.com/vi/company/privacy" target="noopener noreferrer">
                                        Chính Sách Về Quyền Riêng Tư
                                    </a>                                    
                                </div>
                                <div className="link1">                                    
                                    <p>|</p>
                                    <a className="link dkdv" href="https://genshin.mihoyo.com/vi/company/terms" target="noopener noreferrer">
                                        Điều Khoản Dịch Vụ
                                    </a>
                                </div>
                                <div className="link1">
                                    <p>|</p>
                                    <a className="link gtct" href="https://genshin.mihoyo.com/vi/company/about" target="noopener noreferrer">         
                                        Giới Thiệu Công Ty
                                    </a>                                    
                                </div>

                                <div className="link1">                                    
                                    <p>|</p>
                                    <a className="link lhct" href="mailto:genshincs_vn@mihoyo.com" target="noopener noreferrer">
                                        Liên Hệ Chúng Tôi
                                    </a>
                                </div>
                            
                            
                            </div>
                            <div className="copyright">Copyright © 2020 miHoYo All Rights Reserved</div>
                            <div className="extra-info">
                                "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered
                                 trademarks or trademarks of Sony Interactive Entertainment Inc.
                            </div>
                            <div className="footer-content__icons">
                                <span >
                                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, 
                                        and Epic Online Services are trademarks and/or registered 
                                        trademarks of Epic Games. All other trademarks are the property 
                                        of their respective owners.
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Footer
