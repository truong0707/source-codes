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
/* import SignUpAndLoginPage from "./Form/SignUpAndLoginPage"; */
import AboutPage from "./pages/aboutPage/AboutPage";

export default function NavBar() {

    return (

        <Router>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light navbar-background">
                    <div className="container-fluid">
                        <Link className="nav-color-food logo" to="/"> Full Stack <p> TT </p></Link>
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
                    <Route path="/products/allproducts">
                        <CartProvider>
                            {/*  <AllProduct /> */} AllProduce
                        </CartProvider>
                    </Route>
                    <Route path="/products/vegertables">
                        <CartProvider>
                            {/* <Vegetables /> */} Vegetable
                        </CartProvider>
                    </Route>
                    <Route path="/products/fruits">
                        <CartProvider>
                            {/*  <Fruits /> */} Fruid
                        </CartProvider>
                    </Route>
                    <Route path="/products/sigleproduct">
                        {/* <SigleProduct /> */} SingleProduce
                    </Route>
                    <Route path="/blog">
                        {/*  <Blogs /> */} product
                    </Route>
                    <Route path="/contact">
                        {/* <Contacts /> */} Contacts
                    </Route>
                    <Route path="/about">
                      {<AboutPage/>}
                    </Route>
                    <Route path="/cart">
                        <CartProvider>
                            {/*    <Carts /> */} Cart
                        </CartProvider>
                    </Route>
                    <Route path="/ContentsBlogA">
                        {/*  <ContentsBlogA /> */} contenblogA
                    </Route>

                  {/*   <Route path='/form'>
                    {SignUpAndLoginPage}
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}