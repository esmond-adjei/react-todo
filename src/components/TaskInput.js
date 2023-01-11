import TaskInputEntry from "./TaskInputEntry";
import ButtonLike from "./ButtonLike";

import {BsHourglass, BsCalendarDate, BsClock} from 'react-icons/bs';

function TaskInput() {
    return (
        <div className="taskInput">
            <TaskInputEntry />

            <div className="tasksInput--options hcc">
                <ButtonLike text="Time" icon={<BsClock size="1em"/>} />
                <ButtonLike text="Date" icon={<BsCalendarDate size="1em"/>} />
                <ButtonLike text="Duration" icon={<BsHourglass size="1em"/>} />
            </div>
        </div>
    );
}

export default TaskInput;