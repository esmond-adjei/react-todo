
function ButtonLike({text, icon}) {
    return (
        <span className='icon-n-text icon'>
            {icon} <small>{text}</small>
        </span>
    );
}

export default ButtonLike;