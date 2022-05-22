import React from 'react'
import './NavInshorts.css';
import HamburgerDrawer from './HamburgerDrawer'
import { useHistory } from 'react-router';

const NavInshorts = ({ setCategory }) => {

    const history = useHistory();

    const redirectMainPage = () => {
        history.push('/mainpage');
    }

    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img 
            style={{ cursor: "pointer" }}
            src='https://upload.wikimedia.org/wikipedia/vi/e/ea/Logo_dong_a.png' 
            height='80%'
            alt='logo'
            onClick={redirectMainPage}
            />
            
           
        </div>
    )
}

export default NavInshorts