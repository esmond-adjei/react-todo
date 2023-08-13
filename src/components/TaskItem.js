import {FaTrash} from 'react-icons/fa';
import Check from './Check';
import React from 'react';

import {FaEdit, FaCheck, FaRedo} from 'react-icons/fa';

function TaskItem({id, task, status, due, toggleTask, onDelete,onSave,}) {

    const [editingId, setEditingId] = React.useState(null);
    const handleEdit = (id) => {
        setEditingId(null);
        setEditingId(id);
    }

    return (
        <div className={"task--item hcc" + (status ? " done": (due ? " due": ""))}>
            {editingId === id ? 
            (
            <>
                <textarea
                    className="icon task--text"
                    type="text"
                    value={task}
                    onChange={e => onSave(id, e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={e => e.key === 'Enter'? setEditingId(null) : ""}
                    />
                <div className='icon' onClick={() => setEditingId(null)}><FaCheck/></div>
            </>
            ) : (
                <>
                    <Check checked={{id, status, toggleTask}} />
                    <span className="icon task--text">
                        <p style={{maxWidth: "80%", maxHeight: "80%"}}>{task} </p>
                    </span>
                    <div className='task--icons hcc'>
                        {due&&!status&& <span className="icon"><FaRedo/></span>}
                        <span className="icon" onClick={() => handleEdit(id)}><FaEdit/></span>
                        <span className="icon" onClick={()=> onDelete(id)}><FaTrash/></span>
                    </div>
                </>
            )}
        </div>
    );
}

export default TaskItem;