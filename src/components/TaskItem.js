import {FaTrash} from 'react-icons/fa';
import Check from './Check';

function TaskItem({task}) {

    // const task_themes = {
    //     due: {border: "2px solid var(--wine)"},
    //     complete: {backgroundColor: "var(--grey"},
    // }

    return (
        <div className="task--item hcc" >
            <Check/>
            <p className="icon task--text">
                {task}
            </p>
            <span className="icon"><FaTrash/></span>
        </div>
    );
}

export default TaskItem;

