import TaskInputEntry from "./TaskInputEntry";
import ButtonLike from "./ButtonLike";

function TaskInput() {
    return (
        <div className="taskInput">
            <TaskInputEntry />

            <div className="tasksInput--options hcc">
                <ButtonLike text="Time" />
                <ButtonLike text="Date" />
                <ButtonLike text="Duration" />
            </div>
        </div>
    );
}

export default TaskInput;