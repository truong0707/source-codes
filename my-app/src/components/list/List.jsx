import './list.scss'
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';
export default function List() {
    const[isMoved, setIsMoved] = useState(false);
    const[slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className="list">
            <span  style={{ textTransform: 'uppercase'}} className="listTitle">Tiếp tục xem</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="icon" className="sliderArrow left" onClick = {() => handleClick("left")}
                style={{display: !isMoved && "none"}}
                />
               
                <div className="container" ref={listRef}>
                    <a href='/Watch1'>
                        <ListItem video="./video/vdTrailer/1.mp4" img="./img/imgTrailer/1.jpg" index={0}/>
                    </a>
                    <a href='/Watch2'>
                        <ListItem video="./video/vdTrailer/2.mp4" img="./img/imgTrailer/2.jpg" index={0}/>
                    </a>
                    <a href='/Watch3'>
                        <ListItem video="./video/vdTrailer/3.mp4" img="./img/imgTrailer/3.jpg" index={0}/>
                    </a>
                    <a href='/Watch4'>
                        <ListItem video="./video/vdTrailer/4.mp4" img="./img/imgTrailer/4.jpg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/5.mp4" img="./img/imgTrailer/5.jpg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/6.mp4" img="./img/imgTrailer/6.jpeg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/7.mp4" img="./img/imgTrailer/7.jpg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/8.mp4" img="./img/imgTrailer/8.jpg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/9.mp4" img="./img/imgTrailer/9.jpg" index={0}/>
                    </a>
                    <a href='/Watch'>
                        <ListItem video="./video/vdTrailer/10.webm" img="./img/imgTrailer/10.jpg" index={0}/>
                    </a>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick = {() => handleClick("right")}/>
            </div>
        </div>
    )
}
