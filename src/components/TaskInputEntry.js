import {BsKeyboard, BsArrowRepeat} from 'react-icons/bs'
import React from 'react';
import {FaCheck} from 'react-icons/fa';

function TaskInputEntry({todoTasks, setTodoTasks}) {
    const [newTask, setNewTask] = React.useState('');
    
    const handleAddTask = () => {
        const newId = todoTasks.length ? (todoTasks.length - 1) + 1 : 0;
        const newData = [
            {   id: newId, 
                task: newTask, 
                complete: false,
                date: "12 jan 2022",
                duration: "30",
                due: false
            },
            ...todoTasks
        ];
        setTodoTasks(newData);
        setNewTask('');
    }
    
    return (
        <div className="tasksInput--entry hcc">
            <span className='icon'><BsArrowRepeat size="1.5em"/></span>

            <input className='input-box' type="text" placeholder='Add tasks ...'
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    onKeyDown={e => e.key === 'Enter'? handleAddTask() : null}
            />
            {newTask.trim() ? 
                <button onClick={handleAddTask} className='icon inside-textbox'><FaCheck/></button> :
                <span className='inside-textbox'><BsKeyboard size="1.5em"/></span>        
            }
        </div>
    );
}

export default TaskInputEntry;