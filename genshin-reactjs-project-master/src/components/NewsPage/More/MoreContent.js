//Gọi React và useState
import React, { useState } from "react";
import './style.css'
 
//Component hiển thi thêm nội dung
const MoreContent = () => {
  return (
    <>
    <a href="/news-page">
     <div className="evt_more">
                     <div className="box">
                         <img className="img1_more" src="Images/news-content/More/img1.jpg" alt="img1_more"/>
                     </div>
                     <div className="box_ev">
                         <h2>Sự kiện web "Yummy! Thịt nướng dưới các vì sao"</h2>
                         <br/>
                         <p>Đốt lửa trại khiêu vũ bên bờ biển vào ban đêm ~ Hãy nhanh chân đến nướng cá với Shiki Taishou, Du khách!</p>
                     </div>
    </div>  
    </a>
    <a href="/news-page">
    <div className="evt_more">
                     <div className="box">
                         <img className="img1_more" src="Images/news-content/More/img2.jpg" alt="img1_more"/>
                     </div>
                     <div className="box_ev">
                         <h2>Genshin Impact EP - Hương thơm kéo dài của Bướm đơn độc</h2>
                         <br/>
                         <p>Con bướm mang hương thơm lưu luyến này có thể tìm thấy ở đâu ...</p>
                     </div>
    </div>
    </a>
    <a href="/news-page">
    <div className="evt_more">
                     <div className="box">
                         <img className="img1_more" src="Images/news-content/More/img3.png" alt="img1_more"/>
                     </div>
                     <div className="box_ev">
                         <h2>Cuộc thi gửi ảnh đồng tác "Gặp gỡ giữa ánh sáng và bóng tối"</h2>
                         <br/>
                         <p>Danh sách những người chiến thắng sẽ được công bố trên trang web chính thức trong vòng 10 ngày làm việc sau khi sự kiện kết thúc.</p>
                     </div>
    </div>
    </a>
    </>
  );
};
 
export default function App(props) {
  //Sử dụng useState 
  // isShow là một state
  // setShow là function giúp cập nhật state
  // Giá trị mặc định ban đầu của state là false
  const [isShow, setShow] = useState(false);
  return (
    <div>
        <div className="more">
            {isShow === true ? <MoreContent /> : ''}
            {isShow === false ? 
            <button className="bt_more" href="/news-page" onClick={() => {
                // Khi click vào button
                // cập nhật state bằng cách gọi hàm
                // setShow đã được khai báo bên trên/
                setShow(true)
            }}>Xem thêm</button> : ''}
      </div>
    </div>
  );
}