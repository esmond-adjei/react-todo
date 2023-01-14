import {BsKeyboard, BsArrowRepeat} from 'react-icons/bs'

function TaskInputEntry() {
    
    return (
        <div className="tasksInput--entry hcc">
            <span className='icon'>
                <BsArrowRepeat size="1.5em"/>
            </span>

            <span className='input-box'>
                <input type="text" placeholder='Add tasks ...'/>
                <span><BsKeyboard size="1.5em"/></span>        
            </span>
        </div>
    );
}

export default TaskInputEntry;