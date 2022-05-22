import './mainpage.css'
import { useHistory } from "react-router";
export default function TopBar(props) {

    const history = useHistory();
    const handleLogout = () => {
        history.replace('/');
    }
    const infos = (e) => {
        console.log(e)
        history.push('/page');
    }
    return (
        <div className='TopBar'>
            <div className='Title'>
                <h2>Trò chuyện với Sinh viên của UDA</h2>
            </div>
            <div className ='Taskbar'>
                <img className='AvatarMainUser' onClick={infos} src={props.avatarMainUser} alt='' />
                <h2 className='MainName'>{props.mainName}</h2>
                <button className="LogOut btn btn-info" onClick={handleLogout}>Đăng xuất</button>
            </div>

        </div>
    )
}
