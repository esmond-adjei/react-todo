import profileImage from '../images/brian.jpg'
import {FaCheck, FaTrash, FaTimes} from 'react-icons/fa'

import ButtonLike from "./ButtonLike"
import React from 'react'

function Header({todoTasks, setTodoTasks}) {

    const [confirm, setConfirm] = React.useState(false)
    const toggleConfirm = () =>{
        let c = confirm
        setConfirm(!c)
    }

    const confirmDeleteAll = () => {
        setTodoTasks([])
        toggleConfirm()
    }
    
    const countPending = ()=>{
        let count = 0
        todoTasks.forEach((task)=> task.complete ? "": count++)
        return count?(count===1?count+" pending task":count+" pending tasks"):  "No pending tasks"
    }

    return (
        <header>
            <div className="profile">
                <div>
                    <img src={profileImage} alt="profile" className='profile--image' />
                </div>
                <div className='profile--details'>
                    <p>John Doe</p>
                    <small className='hover:bg-teal-500'>{countPending()}</small>
                </div>
            </div>

            <div className='app-config'>
                <p>Thursday, Jan 12</p>
                {todoTasks.length? 
                    (confirm ?
                        <ButtonLike 
                        icon={<span className='icon' onClick={confirmDeleteAll}><FaCheck/></span>} 
                        other={<span className='icon' onClick={toggleConfirm} style={{color: "var(--light-text)"}}><FaTimes/></span>}
                    />
                    :
                    <span onClick={toggleConfirm}>
                        <ButtonLike icon={<FaTrash/>} text="clear tasks" />
                    </span>
                    )
                : ""}
            </div>
        </header>
    )
}

export default Header