import React from 'react'
import './movie.scss'
export default function Movie(props) {
    return (
    <a className="linkA" href={props.href}>
        <div className="movie">
            <div className="movieImg">
                <img  src={props.img} alt=""/>
            </div>

            <div className="content">
                <p className="nameMovie">{props.name}</p>
                <p className="movieTitle">{props.title}</p>
            </div>
            
            <div className="button">
                
                    <button className="btn-play">Xem phim</button>
               
                <button className="btn-title">
                    Đánh giá 70 điểm
                    <div className="rowTitle">
                        <div className="a"></div>
                    </div>
                </button>
            </div>
        </div>
        </a>
    )
}
