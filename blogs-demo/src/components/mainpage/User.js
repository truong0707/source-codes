import './mainpage.css'
// import { useHistory } from 'react-router';

export default function User(user) {

    // const history = useHistory();

    // const tho = (e) => {
    //     history.push('/page');
    // }

    return (
        <div className='User'>
            <div>
            <img className='AvatarUser' src={user.avatarUser} alt='' />
            <p className='NameUser'>{user.nameUser}</p>
            </div>
        </div>
        
    )
}

