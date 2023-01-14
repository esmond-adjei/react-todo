import React from 'react';
import {BsCheckLg} from 'react-icons/bs'


function Check() {

    const [check,setCheck] = React.useState(false);

    const toggleCheck = () => {
        let c = check;
        setCheck(!c);
    }

    return ( 
        <span className="check" onClick={toggleCheck}>
            {check && <BsCheckLg size="0.65em"/>}
        </span>
     );
}

export default Check;
