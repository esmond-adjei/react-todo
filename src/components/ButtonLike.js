
function ButtonLike({text, icon, other}) {
    return (
        <span className='icon-n-text icon'>
            {icon} <small>{text}</small> {other}
        </span>
    );
}

export default ButtonLike;