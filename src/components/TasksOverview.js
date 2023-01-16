function TasksOverview({todoTasks}) {
    return (
        <div className="tasks--overview">
            {todoTasks.length >0 ? <p>tasks overview</p> : <h1>Empty.. Add a task</h1>}
        </div>
    );
}

export default TasksOverview;