import TaskInputEntry from "./TaskInputEntry"
import ButtonLike from "./ButtonLike"

import React from 'react'

function TaskInput({todoTasks, setTodoTasks}) {

    const [newTask, setNewTask] = React.useState('')
    
    const handleAddTask = () => {
        const newId = todoTasks.length ? (todoTasks.length - 1) + 1 : 0
        const newData = [
            {   id: newId, 
                task: newTask, 
                complete: false,
                date: "12 jan 2022",
                duration: "30",
                due: false
            },
            ...todoTasks
        ]
        setTodoTasks(newData)
        setNewTask('')
    }

    return (
        <div className="tasksInput">
            <TaskInputEntry 
                todoTasks={todoTasks} 
                setTodoTasks={setTodoTasks}
                newTask={newTask}
                setNewTask={setNewTask}
                handleAddTask={handleAddTask}
                 />
        {newTask.trim() ?
        <>
            <div className="tasksInput--options hcc">
                <input className="option-item" type="time" name="time" value="12:20"/>
                <input className="option-item" type="date" name="date" value="2022-01-11"/>
                
                <input className="option-item" type="number" name="duration" min="15" max="240" step="15" defaultValue="15"/>
            </div>
            <span className="clear-button" onClick={handleAddTask}><ButtonLike text="Add Task" /></span>
        </>
            : ""
        }
        </div>
    )
}

export default TaskInput