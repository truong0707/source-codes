import React from 'react'
import './movieItem.scss'
import Movie from '../movie/Movie';
export default function MovieItem2() {
    return (
        <>
             <div className="boxMovie">
                 <div className="movieItem">
                 <Movie 
                        img="./img/movie/5.jpg" 
                        href = "/ShowView" 
                        name="Hometown Cha-Cha-Cha (2021) 
                        "
                        title="Hometown Cha-Cha-Cha xoay quanh câu chuyện tình yêu đầy lãng mạn tại ngôi làng nằm cạnh ven biển Gongjin."
                    />
                     <Movie 
                        img="./img/movie/6.jpg" 
                        href = "/ShowView" 
                        name="Hello, Me! (2021)"
                        title="Xin chào, Tôi ơi! - Hello, Me!, xoay quanh cuộc hội ngộ đầy nhiệm màu giữa người phụ nữ Ban Ha Ni 37 tuổi và 
                        cô gái trẻ tự xưng là Ban Ha Ni 17 tuổi."
                    />
                     <Movie 
                        img="./img/movie/7.png" 
                        href = "/ShowView" 
                        name="PHIM CHUYẾN TÀU SINH TỬ"
                        title="Chuyến Tàu Sinh Tử - Train To Busan lấy bối cảnh tại đất nước Hàn Quốc đang phải đối mặt với một trận đại dịch Zombie kinh hoàng."
                    />
                     <Movie 
                        img="./img/movie/8.jpg" 
                        href = "/ShowView" 
                        name="PHIM TUỔI TRẺ CỦA THÁNG NĂM"
                        title="kể về Hwang Hee Tae một người nổi loạn luôn sống với ý niệm chống lại định kiến."
                    />
                    
                 </div>
             </div>
        </>
    )
}
