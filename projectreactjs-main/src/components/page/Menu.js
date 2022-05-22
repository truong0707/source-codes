import './page.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


export default function Menu(props){
    const history = useHistory();

    const trangchu = () => {
        history.push('/mainpage');
    }
    const tintuc = () => {
        history.push('/tintuc');
    }
    return(
        <div className="menu_top">
        <ul>
            <li><Link to="#" title="Trang chủ" onClick={trangchu}>Trang chủ</Link></li>
            <li><Link to="#" title="Tin nhắn" onClick={tintuc}>Tin tức </Link></li>
        </ul>
    </div>
    )
}
