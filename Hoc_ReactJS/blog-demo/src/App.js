import CardBody1 from './components/Card1Body/CardBody1';
/* import IMG_Blog from './components/IMG_Blog'; */
import './App.css';
import AllBody from './components/AllBody';
// import những thứ cần trong react Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header_Blog from './components/Header/Header_Blog';
import FooterBlog from './components/FooterBlog';



function App() {
  return (
    <Router>
      <div className="container-fluid">

        <Header_Blog/>
        <AllBody />
        <Route path="/Nguyen" component={CardBody1}/>
        <FooterBlog/>
        {/*    <IMG_Blog/> */}
      </div>
      

    </Router>
  );
}

export default App;
