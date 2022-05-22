import React from 'react'
import './Recommend.css'

const Recommend = () => {
    return (
        <>
        <div>
        <img className="blur" src="Images/news-content/background/blur.jpg" alt="blur"/>
        </div>
        <div className="row-news">
            <a href="/news-page">
            <div className="column1">
                <div className="box1">
                    <img className="img1" src="Images/news-content/column-images/img1.png" alt="img1"/>
                </div>
                <div className="box1-1">
                    <h3 className="texth3">"Bất Cứ Thứ Gì Tôi Có Thể Giúp Một Tay?" __"Người Bảo Vệ Từ Afar" Thoma</h3>
                    <br/>
                    <p className="textp">Hôm nay chúng tôi sẽ giới thiệu cho bạn về một nhân vật mới, Thoma!</p>
                    <br/>
                    <br/>
                    <p className="date">Ngày 31 tháng 10 năm 2021</p>
                    <p className="info">Thông tin</p>
                </div>
            </div>
            </a>
            <a href="/news-page">
            <div className="column2">
                <div className="box2">
                <img className="img2" src="Images/news-content/column-images/img2.jpg" alt="img2"/>
                </div>
                <div className="box2-2">
                    <h3 className="texth3">Nhân vật Demo-"Thoma: Blazing Defense" | Tác động Genshin</h3>
                    <br/>
                    <p className="textp">Với Thoma hòa đồng, luôn có rất nhiều cuộc gặp gỡ sống động và thú vị.</p>
                    <br/>
                    <br/>
                    <p className="date">Ngày 29 tháng 10 năm 2021</p>
                    <p className="info">Thông tin</p>
                </div>
            </div>
            </a>
            <a href="/news-page">
            <div className="column3">
                <div className="box3">
                <img className="img3" src="Images/news-content/column-images/img3.jpg" alt="img3"/>
                </div>
                <div className="box3-3">
                    <h3 className="texth3">Chi tiết về cách chơi của "Labyrinth Warriors"</h3>
                    <br/>
                    <p className="textp">Sự kiện mới "Chiến binh mê cung" sắp bắt đầu! Chiến thôi nào!</p>
                    <br/>
                    <br/>
                    <p className="date">Ngày 31 tháng 10 năm 2021</p>
                    <p className="info">Thông tin</p>
                </div>
            </div>
            </a>
        </div>
        </>
    )
}
export default Recommend