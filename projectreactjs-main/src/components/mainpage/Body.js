import './mainpage.css'
import ChatUser from './ListUser'
import SendMess from './SendMess'
import { Link } from 'react-router-dom'



export default function Body() {
    return (
        
        <div className='Body'>
            <div className='NavigationBar'>
                <ul>
                    <li><Link className="navi active" to="/mainpage">
                        <i className="IconNavi far fa-comment-dots"></i>
                    </Link></li>
                    <li><Link to="/tintuc">
                        <i className="IconNavi far fa-newspaper"></i>
                    </Link></li>

                    <li><Link to="/tintuc">
                        <i className="IconNavi far fa-newspaper"></i>
                    </Link></li>

                    <li><Link to="/tintuc">
                        <i className="IconNavi far fa-newspaper"></i>
                    </Link></li>
                    <li><Link className="navi active" to="/mainpage">
                        <i className="IconNavi far fa-comment-dots"></i>
                    </Link></li>
                    
                </ul>
            </div>
            <div className='ChatBox'>
                <ChatUser />
                <SendMess />
            </div>
        </div>

    )
}