
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.scss'
import List from './../../list/List';
import ListMovie from './../../listMovie/ListMovie';
import Footer from './../../footer/Footer';


 const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
            <ListMovie/>
            <div className="spaceList"></div>
            <hr/>
            <Footer/>
        </div>
    )
}
export default Home
