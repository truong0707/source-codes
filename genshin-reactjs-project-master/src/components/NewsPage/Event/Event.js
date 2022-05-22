import React from "react"
import './Event.css'

const Event = () => {
    return (
        <>
            <div className="frame">
                <div className="evt">
                    <button className="btn"> <a href="/news-page">Mới</a></button>
                    <button className="btn"> <a href="/news-page">Thông tin</a></button>
                    <button className="btn"> <a href="/news-page">Bản tin</a></button>
                    <button className="btn"> <a href="/news-page">Sự kiện</a></button>
                </div>
                <a href="/news-page">
                <div className="evt1">
                    <div className="box1">
                        <img className="img01" src="Images/news-content/event-images/img01.jpg" alt="img01"/>
                    </div>
                    <div className="box1_1">
                        <h2>Paimon's Sneak Peek tại Phiên bản 2.2 Sự kiện mới - Giai đoạn II</h2>
                        <br/>
                        <p>Xin chào, các du khách ~ Paimon đã nhận được tin sốt dẻo về các sự kiện mới nhất.
                            Nhấp vào hình ảnh bên dưới để có cái nhìn tổng quan nhanh chóng! Sự kiện "Chiến binh mê cung"
                            hiện đang diễn ra, vì vậy hãy nhớ đừng bỏ lỡ!</p>
                    </div>
                </div>
                </a>
                <a href="/news-page">
                <div className="evt1">
                    <div className="box1">
                        <img className="img01" src="Images/news-content/event-images/img02.jpg" alt="img01"/>
                    </div>
                    <div className="box1_1">
                        <h2>Điều ước sự kiện "Moment of Bloom" - Tăng tỷ lệ rơi cho "Fragrance in Thaw" Hu Tao (Pyro)!</h2>
                        <br/>
                        <p>Khách du lịch, tích trữ vũ khí và nhân vật trong sự kiện này muốn giúp nhóm của bạn mạnh hơn trong chiến đấu!</p>
                    </div>
                </div>
                </a>
                <a href="/news-page">
                <div className="evt1">
                    <div className="box1">
                        <img className="img01" src="Images/news-content/event-images/img03.jpg" alt="img01"/>
                    </div>
                    <div className="box1_1">
                        <h2>Điều ước sự kiện "Epitome Invocation" - Tăng tỷ lệ rơi cho Staff of Homa (Polearm) và Elegy cho End (Bow)!</h2>
                        <br/>
                        <p>Du khách hãy tích trữ vũ khí và nhân vật trong "Epitome Invocation" để giúp nhóm của bạn mạnh mẽ hơn trong chiến đấu!</p>
                    </div>
                </div>
                </a>
                <a href="/news-page">
                <div className="evt1">
                    <div className="box1">
                        <img className="img01" src="Images/news-content/event-images/img04.png" alt="img01"/>
                    </div>
                    <div className="box1_1">
                        <h2>"Bất cứ thứ gì tôi có thể giúp một tay?" - "Người bảo vệ từ Afar" Thoma</h2>
                        <br/>
                        <p>Hôm nay, chúng tôi sẽ giới thiệu một nhân vật mới, Thoma!</p>
                    </div>
                </div>
                </a>
                <a href="/news-page">
                <div className="evt1">
                    <div className="box1">
                        <img className="img01" src="Images/news-content/event-images/img05.jpg" alt="img01"/>
                    </div>
                    <div className="box1_1">
                        <h2>Nhân vật Demo - "Thoma: Blazing Defense" | Tác động Genshin</h2>
                        <br/>
                        <p>Với Thoma hòa đồng, luôn có rất nhiều cuộc gặp gỡ sống động và thú vị.</p>
                    </div>
                </div>
                </a>
            </div>

        </>
    )
}
export default Event