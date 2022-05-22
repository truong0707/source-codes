import React from 'react'
import './listMovie.scss'
import MovieItem1 from '../movieItem/MovieItem1';
import MovieItem2 from './../movieItem/MovieItem2';
import MovieItem3 from './../movieItem/MovieItem3';
import MovieItem4 from './../movieItem/MovieItem4';

export default function ListMovie() {
    return (
           <div className="listMovie">
               <p className="space">PHIM<span>MỚI</span></p>
                <MovieItem1/>
                <MovieItem2/>
               <p className="space1">PHIM<span>HOT</span></p>
               <MovieItem3/>
                <MovieItem4/>
           </div>
    )
}
