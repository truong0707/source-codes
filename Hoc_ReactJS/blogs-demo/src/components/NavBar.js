import { Link } from "react-router-dom";
import "./NavBar.css"
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

export default function NavBar() {


    return (
        <div className="container-fluid">
            <ul className="nav Nav">
                <li className="nav-item box">
                    <Link to="/" className="nav-link boxnavv" aria-current="page"><h5>Trang Chủ</h5></Link>
                </li>

                <li className="nav-item ">
                    <Link to="/" className="nav-link boxnav"  aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                        <DropdownButton variant="" as={ButtonGroup} title="Shop">
                            <Dropdown.Item eventKey="1">Shop</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Wish List</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Single Product</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Check out</Dropdown.Item>
                        </DropdownButton>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link boxnav">About</Link>
                </li>


                <li className="nav-item">
                    <Link to="/Blog" className="nav-link boxnav">Blog</Link>
                </li>

                <li className="nav-item">
                    <Link to="/Contact" className="nav-link boxnav">Contact</Link>
                </li>

                <li className="nav-item">
                    <Link to="" className="nav-link boxnav">Giỏ Hàng</Link>
                </li>

                <li className="nav-item">
                        <DropdownButton variant="" as={ButtonGroup} title="Đăng Nhập">
                            <Dropdown.Item eventKey="1">Đăng Kí</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Đăng Xuất</Dropdown.Item>
                        </DropdownButton>
                </li>

            </ul>
        </div>




    );
}