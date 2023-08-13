
function ButtonLike({text, icon}) {
    return (
        <div className="button-like">
            {icon}
            <p>{text}</p>
        </div>
    );
}

export default ButtonLike;