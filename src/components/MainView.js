import TasksOverview from './TasksOverview'
import TaskItem from './TaskItem'

function MainView() {
    return (
        <main className="mainView">
            <TasksOverview />

            <div className='tasks--items'>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        </main>
    );
}

export default MainView;