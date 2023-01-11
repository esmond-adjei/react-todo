// <p>icon</p>
function ButtonLike(props) {
    return (
        <div className="button-like">
            <span className="icon"></span>
            <p>{props.text}</p>
        </div>
    );
}

export default ButtonLike;