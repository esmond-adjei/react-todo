import './Comps.css';
import profileImage from '../images/profile-image.png';

import {FaTrash} from 'react-icons/fa';

function Header() {
    return (
        <header>
            <div className="profile">
                <div className='profile--image'>
                    <img src={profileImage} alt="profile" />
                </div>
                <div className='profile--details'>
                    <p>User Name</p>
                    <small>Number of Tasks</small>
                </div>
            </div>

            <div className='app-config '>
                <FaTrash size="20px"/>
            </div>
        </header>
    );
}

export default Header;