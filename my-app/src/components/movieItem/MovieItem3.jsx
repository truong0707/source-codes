import React from 'react'
import './movieItem.scss'
import Movie from '../movie/Movie';
export default function MovieItem3() {
    return (
        <>
             <div className="boxMovie">
                 <div className="movieItem">
                 <Movie 
                        img="./img/movie/9.jpg" 
                        href = "/ShowView" 
                        name="PHIM HIỆN THÂN TÀ ÁC"
                        title="Malignant xoay quanh câu chuyện về người phụ nữ đơn thân Madison, hiện đang phải đối mặt với những ám ảnh về các hình ảnh bí ẩn 
                        và kinh hoàng về những vụ giết người tàn ác."
                    />
                     <Movie 
                        img="./img/movie/10.jpg" 
                        href = "/ShowView" 
                        name="PHIM NGỰ SỬ TÀI BA VÀ QUÝ CÔ THÔNG THÁI"
                        title="kể về chàng trai Ra Yi Eon, vô cùng thông minh và luôn thích 
                        một cuộc sống vô cùng đơn giản và yên bình."
                    />
                     <Movie 
                        img="./img/movie/11.png" 
                        href = "/ShowView" 
                        name="PHIM LUYẾN MỘ"
                        title="Xoay quanh câu chuyện về cô nàng Lee Hwi, xinh đẹp và tài giỏi. Năm xưa, khi mẹ của cô sinh đôi và mọi người
                        cho rằng đó là điềm gỡ nên đã tìm cách giết hại cô."
                    />
                     <Movie 
                        img="./img/movie/12.jpg" 
                        href = "/ShowView" 
                        name="PHIM OH! CHỦ NHÂN"
                        title="Master kể về chuyện tình yêu giữa biên kịch và cô diễn viên xinh đẹp chuyên trị những vai diễn lãng mạn hài hước."
                    />

                 </div>
             </div>
        </>
    )
}
