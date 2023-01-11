import {GrKeyboard} from 'react-icons/gr'
import {RiRepeatOneFill} from 'react-icons/ri'

function TaskInputEntry() {
    return (
        <div className="tasksInput--entry hcc">
            <RiRepeatOneFill size="2em"/>
            <input type="text" />
            <GrKeyboard size="2em"/>
        </div>
    );
}

export default TaskInputEntry;