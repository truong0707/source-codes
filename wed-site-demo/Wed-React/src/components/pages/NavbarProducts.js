import { Link } from "react-router-dom";

// icon
import { AiFillHome } from 'react-icons/ai';
import { BsShopWindow } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { BsMessenger } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';

 
export default function NavbarProducts(props) {
    return (
        <>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-header-hover">
                <li className="nav-item">
                    <input className="input-nav" placeholder="Tìm kiếm trên failcebook" />
                </li>
            </ul>


            <ul className=" navbar-nav me-auto mb-2 mb-lg-0 navbar-header-hover">
                <li className="nav-item">
                    <Link to="/" className="nav-link boxIconMenu-nav active" id="navbar-home-hover" aria-current="page"><h3><AiFillHome style={{fontSize: 40 }}/></h3></Link>
                </li>

                <li className="nav-item">
                    <Link to="/maketplace" className="nav-link boxIconMenu-nav active" aria-current="page"><h3><BsShopWindow style={{fontSize: 37 }}/></h3></Link>
                </li>

                <li className="nav-item">
                    <Link to="/groups" className="nav-link boxIconMenu-nav active" aria-current="page"><h3><HiUserGroup style={{fontSize: 40 }}/></h3></Link>
                </li>

                <li className="nav-item">
                    <Link to="/videosforyou" className="nav-link boxIconMenu-nav active" aria-current="page"><h3><AiOutlineAppstore style={{fontSize: 40 }}/></h3></Link>
                </li>
            </ul>


            <ul className=" navbar-nav">
            <li className="nav-item">
                    <Link to="/user" className="nav-link active" aria-current="page">USer</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link active " aria-current="page"><h3>< CgMenuGridO style={{fontSize: 40 }}/></h3></Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link active" aria-current="page"><h3>< BsMessenger style={{fontSize: 29 }}/></h3></Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link active" aria-current="page"><h3>< IoIosNotifications style={{fontSize: 37 }}/></h3></Link>
                </li>


                <li className="nav-item dropdown code">
                    <Link to="/products" className="nav-link dropdown-toggle active" href id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCT
                    </Link>
                    <ul className="dropdown-menu navbar-product" aria-labelledby="navbarDropdown">
                        <li>
                            <Link to="/products/dangnhap" className="dropdown-item">ĐĂNG NHẬP</Link>
                        </li>

                        <li>
                            <Link to="/products/dangky" className="dropdown-item">ĐĂNG KÝ</Link>
                        </li>
                    </ul>
                </li>

            </ul>

        </>
    )
}