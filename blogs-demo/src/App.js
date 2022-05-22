import TopBar from './components/mainpage/TopBarMainUser';
import Body from './components/mainpage/Body';
import React, { Fragment } from 'react';
import LoginAccount from './components/login/LoginAccount'
import Form from './components/register/Form'
import TinTuc from './components/news/TinTuc'
import Appds from  './components/page/Appds'
import Appdss from './components/infoPartner/Infomation'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/mainpage/Footer';





function App() {
  return (

    <Fragment >
      <Router>
          <Switch>
            <Route path="/" exact>
              <LoginAccount />
            </Route>

            <Route path="/register" >
              <Form />
            </Route>

            <Route path="/page" >
              <Appds />
            </Route>

            <Route path="/info" >
              <Appdss />
            </Route>

            <Route path="/tintuc">
              <TinTuc />
            </Route>

            <Route path="/mainpage">
              <TopBar
                avatarMainUser='./image/user3.jpg'
                mainName='PHILIP NGUYỄN'
              />
              <Body/>
              <Footer/>
            </Route>
            

          </Switch>
      </Router>

    </Fragment>
  );
}

export default App;
