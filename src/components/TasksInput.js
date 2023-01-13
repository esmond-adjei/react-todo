import TaskInputEntry from "./TaskInputEntry";
import ButtonLike from "./ButtonLike";

import {BsHourglass, BsCalendarDate, BsClock} from 'react-icons/bs';

function TaskInput() {
    return (
        <div className="tasksInput">
            <TaskInputEntry />

            <div className="tasksInput--options hcc">
                <ButtonLike text="Time" icon={<BsClock size="2em"/>} />
                <ButtonLike text="Date" icon={<BsCalendarDate size="2em"/>} />
                <ButtonLike text="Duration" icon={<BsHourglass size="2em"/>} />
            </div>
        </div>
    );
}

export default TaskInput;