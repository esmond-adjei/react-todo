import TaskInputEntry from "./TaskInputEntry";
import ButtonLike from "./ButtonLike";

import {BsHourglass, BsCalendarDate, BsClock} from 'react-icons/bs';

function TaskInput({todoTasks, setTodoTasks}) {
    return (
        <div className="tasksInput">
            <TaskInputEntry todoTasks={todoTasks} setTodoTasks={setTodoTasks} />

            <div className="tasksInput--options hcc">
                <ButtonLike icon={<BsClock/>} text="12:00 am" />
                <ButtonLike icon={<BsCalendarDate/>} text="Tomorrow" />
                <ButtonLike icon={<BsHourglass/>} text="2 hours" />
            </div>
        </div>
    );
}

export default TaskInput;