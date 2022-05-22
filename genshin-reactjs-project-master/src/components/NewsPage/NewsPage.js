import Event from './Event/Event'
import MoreContent from './More/MoreContent'
import Recommend from './Recommend/Recommend'
// import Test from './Test'
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function NewsPage() {
    return (
        <div>
            <Header/>
            {/* <Test/> */}
            <Recommend/>
            <Event/>
            <MoreContent/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default NewsPage
