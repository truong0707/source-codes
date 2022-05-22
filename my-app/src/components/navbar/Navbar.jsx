import { Search } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss';
import Series from './Series';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => {
            window.pageYOffset = null
        } ;
    };
    return (

        <div className= {isScrolled ? "navbar scroll" : "navbar"}>
            <div className="container">
                <div className="left">
                    <a style={{ textDecoration: 'none', color: 'white' }} href="/">
                        <img src="./img/logo.png" alt="" />
                    </a>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="/">
                        <span >Trang chủ</span>
                    </a>
                    <span className="series">
                        Series
                        <div className="disSeries">
                            <Series/>
                        </div>
                    </span>
                    <span className="series">
                        phim
                        <div className="disSeries">
                            <Series/>
                        </div>
                    </span>
                    <span>Mới và phổ biến</span>
                    <span>Danh sách của tôi</span>

                </div>
                <div className="right">
                    <div className="search ">
                        <input className="input" type="text" />
                        <Search className="icon iconSearch"/>
                    </div>
                    <span>Trẻ em</span>
                    <Notifications className="icon"/>
                    <img src="./img/ys.jpg" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <a style={{ textDecoration: 'none', color: 'white'}} href="/login">
                                <span>Logout</span>
                            </a>
                           
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
 