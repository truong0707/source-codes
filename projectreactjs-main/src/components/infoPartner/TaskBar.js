import './info.css'
import { useHistory } from 'react-router';

export default function TaskBar() {

    const history = useHistory();

    const chinh = () => {
        history.push('/mainpage');
    }
    return (
        <div className = 'TaskBar'> 
            <div className="">
                <button type="button" onClick={chinh} className="active btn">Trang chủ</button>
            </div>
        </div>
    );
}
