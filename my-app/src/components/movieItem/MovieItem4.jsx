import React from 'react'
import './movieItem.scss'
import Movie from '../movie/Movie';
export default function MovieItem4() {
    return (
        <>
             <div className="boxMovie">
                 <div className="movieItem">
                 <Movie 
                        img="./img/movie/13.jpg" 
                        href = "/ShowView" 
                        name="PHIM BẦU TRỜI RỰC ĐỎ"
                        title="Vào thời kỳ Joseon, xoay quanh câu chuyện về cô nàng Hong Cheon Ki có tài năng thiên bẫm về hội họa,
                        không chỉ vậy cô còn là nữ hội họa đầu tiên tại học viện Dohwaseo."
                    />
                     <Movie 
                        img="./img/movie/14.jpg" 
                        href = "/ShowView" 
                        name="PHIM SINH NHẬT U BUỒN"
                        title="Xoay quanh câu chuyện về nữ sinh Ha Rin,
                        cô vừa quyết định sẽ tỏ tình với người bạn Seo Jun vào đúng ngày sinh nhật 
                        lần thứ 18 của mình."
                    />
                     <Movie 
                        img="./img/movie/15.jpg" 
                        href = "/ShowView" 
                        name="PHIM BÀN TIỆC CỦA PHÙ THỦY"
                        title="The Witch's Diner, được chuyển thể từ quyển tiểu thuyết cùng tên diễn ra ở mọt nhà 
                        họ do một phù thủy quản lý."
                    />
                     <Movie 
                        img="./img/movie/16.jpg" 
                        href = "/ShowView" 
                        name="PHIM JOSÉE, NÀNG THƠ CỦA TÔI"
                        title="Xoay quanh câu chuyện về chàng sinh viên Young Seok, 
                        sau một lần đi học về cậu đã vô tình gặp được một bà lão nhặt ve chai và giúp đỡ đem 
                        về nhà của bà."
                    />
                 </div>
             </div>
        </>
    )
}
