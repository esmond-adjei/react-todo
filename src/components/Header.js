import profileImage from '../images/brian.jpg';
import {FaTrash} from 'react-icons/fa';

import ButtonLike from "./ButtonLike";

function Header() {
    return (
        <header>
            <div className="profile">
                <div>
                    <img src={profileImage} alt="profile" className='profile--image' />
                </div>
                <div className='profile--details'>
                    <p>John Doe</p>
                    <small className='hover'>3 pending tasks</small>
                </div>
            </div>

            <div className='app-config'>
                <p>Thursday, Jan 12</p>
                <ButtonLike icon={<FaTrash/>} text="clear tasks" />
            </div>
        </header>
    );
}

export default Header;