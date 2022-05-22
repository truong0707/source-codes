import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import DivTop from './components/DivTop/DivTop';
import NavBar from './components/NavBar';
import Home from './components/pages/homePage/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Blog from './components/pages/pagesBlog/Blog';
import Contact from './components/pages/Contact';
import FooterPage from './components/FooterPage';
import ContentsBlogA from './components/pages/pagesBlog/BlogA/ContentsBlogA';
import './App.css';

function App() {
  
  return (
   <Router className="container-fluid">
     <div><DivTop/></div>
     <NavBar/>
     <div className="container-fluid">
     <Switch>
       <Route path="/" exact component ={Home}/>
       <Route path="/Shop" exact component ={Shop}/>
       <Route path="/About" exact component ={About}/>
       <Route path="/Blog" exact component ={Blog}/>
       <Route path="/ContentsBlogA" exact component ={ContentsBlogA}/>
       <Route path="/Contact" exact component ={Contact}/>
     </Switch>
     </div>
     <FooterPage/>


   </Router>
  );
}

export default App;
