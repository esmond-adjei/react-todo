import './Comps.css';
import profileImage from '../images/profile-image.png';

import {FaTrash} from 'react-icons/fa';
    // <img src={profileImage} alt="profile" />

function Header() {
    return (
        <header>
            <div className="profile">
                <div className='profile--image'>
                </div>
                <div className='profile--details'>
                    <p>User Name</p>
                    <small>Number of Tasks</small>
                </div>
            </div>

            <div className='app-config'>
                <span className='icon'><FaTrash /> <small>Clear Tasks</small></span>
            </div>
        </header>
    );
}

export default Header;