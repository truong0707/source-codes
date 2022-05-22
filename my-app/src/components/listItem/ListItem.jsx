import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from '@material-ui/icons';
import './listItem.scss';
import { useState } from 'react';

export default function ListItem(props,{index}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
<>
    <div  
        className="listItem" 
        style={{left: isHovered && index * 255 -50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
            <img src={props.img} alt="" />
            {isHovered && (
<>
            <video  width="320" height="240" controls autoPlay muted  src={props.video}></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 40 mins</span>
                    <span className="limit">+18+</span>
                    <span>2020</span>
                </div>
                <div className="decs">
                Ấn Quỷ: Tại một thị trấn nhỏ thuộc vùng New England. 
                Có cô gái thể nghe và có được năng lực chữa bệnh cho mọi người.
                </div>
                <span className="genre">Action</span>
            </div>
</>
        )}
    </div>
</>   
    )
    
}


