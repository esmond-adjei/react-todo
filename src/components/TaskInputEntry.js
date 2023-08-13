import {BsKeyboard, BsArrowRepeat} from 'react-icons/bs'
import {FaCheck} from 'react-icons/fa';

function TaskInputEntry({todoTasks, setTodoTasks, newTask, setNewTask, handleAddTask}) {

    
    return (
        <div className="tasksInput--entry hcc">
            <span className='icon'><BsArrowRepeat size="1.5em"/></span>

            <input className='input-box' type="text" placeholder='Add tasks ...'
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    onKeyDown={e => e.key === 'Enter'? handleAddTask() : null}
            />
            {newTask.trim() ? 
                <span onClick={handleAddTask} className='icon inside-textbox'><FaCheck/></span> :
                <span className='inside-textbox'><BsKeyboard size="1.5em"/></span>        
            }
        </div>
    );
}

export default TaskInputEntry;