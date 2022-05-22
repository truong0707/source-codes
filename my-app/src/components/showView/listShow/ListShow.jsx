import React from 'react'
import './listShow.scss'
import { PlayArrow, Add } from '@material-ui/icons';
export default function ListShow() {
    const bgImg = "./img/show/1.jpeg"
    return (
        <div className="bgImg">
             <img src={bgImg} alt=""/>
            <div className="backTranColor"></div>
            <div className="listShow">
                <div className="show">
                    <div className="leftShow">
                        <div className="nameBox">
                            <h1 className="nameMovie">QUEEN MR. QUEEN (2021)</h1>
                        </div>
                        <div className="iconBox">
                            <button className="btnPlayShow">
                                <a href="/Watch2">
                                    <PlayArrow className="iconShow"/>
                                </a>
                            </button>
                            
                                <button className="iconAdd">
                                <a href="/Watch2">
                                    <Add className="iconShow "/>
                                </a>
                                </button>
                            
                     
                        </div>
                        <div className="tittleBox">
                            <p>
                            Là câu chuyện hài hước của anh chàng đầu bếp Jang Bong Hwan. 
                            Không ngờ rằng Jang Bong Hwan lại xuyên không về thời cổ đại trong thân xác của vị 
                            hoàng hậu nọ. Tại đây "chàng hậu" cùng với nhà vua khó gần có phần "điên điên" bắt 
                            đầu câu chuyện mèo vờn chuột vừa hài hước lại dễ thương vô cùng.
                            </p>
                        </div>
                        <div className="actorBox">
                            <p>
                                Diễn Viên: Jang Bong Hwan
                            </p>
                        </div>
                        
                    </div>
                    <div className="rightShow"></div>
                </div>
                
            </div>
        </div>
    )
}
