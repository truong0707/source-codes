/* import Library */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

/* import components */
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import NavBar from "./components/navbar/NavBar";
import SideDrawer from "./components/reuseComponents/SideDrawer/SideDrawer";
import BackDropNav from "./components/reuseComponents/BackDrop/BackDropNav";
import { Navigate } from "react-router-dom";
import Form from "./pages/Form";
import DetailProduct from "./pages/DetailProduct";
import CardProductState from "./store/cardProduct/CardProductState";
import CartState from "./store/cart/CartState";
import CartDrawer from "./components/reuseComponents/cartDrawer/CartDrawer";
import PostBlogDetail from "./pages/PostBlogDetail";
import './App.css';


function App() {
  /* check user */
  const user = true;


  /* xử lý đóng mở thanh menu nav */
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleOpenDrawerToggleClick = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  const handleCloseDrawerToggleClick = () => {
    return setSideDrawerOpen(false)
  }

  let sideDrawer;
  let backDrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />
    backDrop = <BackDropNav HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} />
  }


  return (
    <CartState>
      <CardProductState>
        <Router>
          <div className="App">
            <NavBar
              user={user}
              drawerToggleClick={handleOpenDrawerToggleClick}
            />
            {sideDrawer}
            {backDrop}

             {/* giao diện giỏ hàng  */}
             <CartDrawer />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="*" element={<NotFound />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/contacts" element={<Contacts />} />
              <Route exact path="/login" element={user ? <Navigate to='/profile' /> : <Form />} />
              <Route exact path="/signup" element={user ? <Navigate to='/profile' /> : <Form />} />
              <Route exact path="/detail-product/:productId" element={user ? <DetailProduct /> : <Navigate to='/login' />}></Route>
              <Route exact path="/Blog/:ParamNameProduct" element={user ? <PostBlogDetail /> : <Navigate to='/login' />}></Route>
            </Routes>
          </div>
        </Router>
      </CardProductState>
    </CartState>

  );
}

export default App;
