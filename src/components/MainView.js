import TasksOverview from './TasksOverview'
import TaskItem from './TaskItem'

function MainView() {

    const todoTasks = [
        "Explore and set up tailwind",
        "Decompose the tasks",
        "Code the functionality",
        "Learn about flex-grow and flex-shrink",
        "Outline the structure and the elements of each todo item. eg: date, isComplete, tasks, duration",
    ]

    return (
        <main className="mainView">
            <TasksOverview />

            <div className='tasks--items'>
                {todoTasks.map((todo)=> <TaskItem key={todoTasks.indexOf(todo)} task={todo}/>)}
            </div>
        </main>
    );
}

export default MainView;