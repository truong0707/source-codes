import React from 'react'
import './movieItem.scss'
import Movie from '../movie/Movie';
export default function MovieItem() {
    return (
        <>
            <div className="boxMovie">
                 <div className="movieItem">
                    <Movie 
                        img="./img/movie/1.jpg" 
                        href = "/ShowView" 
                        name="PHIM MR. QUEEN
                        Mr. Queen (2021) "
                        title="Là câu chuyện hài hước của anh chàng đầu bếp Jang.
                        Không ngờ rằng Jang lại xuyên không..."
                    />
                     <Movie 
                        img="./img/movie/2.jpg" 
                        href = "/ShowView" 
                        name="Deliver Us From Evil (2020)"
                        title="Ác Quỷ Đối Đầu - Deliver Us From Evil kể về người đàn ông In Nam là một tên sát thủ đã về hưu.."
                    />
                     <Movie 
                        img="./img/movie/3.jpg" 
                        href = "/ShowView" 
                        name="Jungle Cruise (2021) "
                        title="Thám Hiểm Rừng Xanh câu chuyện về Frank và Lily, cả hai cùng nhau bắt đầu kế hoạch chuyến hành trình 
                        thám hiểm tại khu rừng nhiệt đới Amazon nguy hiểm nhất."
                    />
                     <Movie 
                        img="./img/movie/4.jpg" 
                        href = "/ShowView" 
                        name="Ghost Rider: Spirit of Vengeance (2011)"
                        title="Ma Tốc Độ 2: Spirit of Vengeance khi Johnny Blaze đang lẫn trốn tại ĐÔng Âu và vẫn phải đối mặt với 
                        lời nguyền kinh hoàng."
                    />
                    
                 </div>
            </div>
        </>
    )
}
