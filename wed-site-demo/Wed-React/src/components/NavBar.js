import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import './NavBar.css'
import { CartProvider } from 'react-use-cart';
import NavbarProducts from "./pages/NavbarProducts";
import AllHomePage from "./pages/homePage/AllHomePage";


export default function NavBar() {

    return (

        <Router>
            <div className="row">

                <nav className="navbar navbar-expand-lg navbar-light navbar-background">
                    <div className="container-fluid">
                        <Link className="nav-color-food logo" to="/">GG</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-tasks nav-icon"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <NavbarProducts />
                            {/* <div>
                                <Connections />
                            </div> */}
                        </div>
                    </div>
                </nav>


                <Switch>
                    <Route exact path="/">
                        <CartProvider>
                            <AllHomePage />
                        </CartProvider>
                    </Route>

                    <Route path="/maketplace">
                        MatketPlace
                    </Route>
                    <Route path="/groups">
                        Groups
                    </Route>
                    <Route path="/videosforyou">
                        videos
                    </Route>
                    <Route path="/ContentsBlogA">
                        contenblogA
                    </Route>

                    <Route path="/User">
                        User
                    </Route>

                    {/*   <Route path='/form'>
                    {SignUpAndLoginPage}
                    </Route> */}

                    <Route path="/products/dangnhap">
                        <CartProvider>
                            Đăng Nhập
                        </CartProvider>
                    </Route>

                    <Route path="/products/dangky">
                        <CartProvider>
                            Đăng Ký
                        </CartProvider>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}