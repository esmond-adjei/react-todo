import React from 'react';
import {BsCheckLg} from 'react-icons/bs'


function Check({checked}) {
    const [ischecked,setCheck] = React.useState(checked.status);

    const toggleCheck = () => {
        const c = ischecked;
        setCheck(!c);
        checked.toggleTask(checked.id);
    }

    return ( 
        <span className="check" onClick={toggleCheck}>
            {ischecked && <BsCheckLg size="0.65em"/>}
        </span>
     );
}

export default Check;
