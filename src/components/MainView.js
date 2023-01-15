import TasksOverview from './TasksOverview'
import TaskItem from './TaskItem'
import React from 'react';

function MainView({todoTasks, setTodoTasks}) {

    const handleTaskToggle = (id)=> {
        // toggle value of complete
        const Tasks = todoTasks.map((task) => task.id === id ? task = {...task, complete: !task.complete} : task)
        // sort data according to complete
        setTodoTasks(Tasks.sort((a, b) => a.complete === b.complete ? 0 : a.complete ? 1 : -1));
    }

    const handleDelete = (id) => {
        setTodoTasks(todoTasks.filter(item => item.id !== id));
    }

    const handleSave = (id, newTask) => {
        const newData = todoTasks.map(item => {
            if(item.id === id){
                item.task = newTask;
            }
            return item;
        });
        setTodoTasks(newData);
    }

    return (
        <main className="mainView">
            <TasksOverview />

            <div className='tasks--items'>
                {todoTasks.map((todo) => <TaskItem 
                                key={todo.id}
                                id={todo.id}
                                task={todo.task} 
                                status={todo.complete}
                                due={todo.due}
                                toggleTask={handleTaskToggle}
                                onDelete={handleDelete}
                                onSave={handleSave}
                                />
                            )}
            </div>
        </main>
    );
}

export default MainView;