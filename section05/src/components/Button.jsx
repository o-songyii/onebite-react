const Button = ({text,color,children}) => {
    const onClickButton = (e) => {
        console.log(e) // 이벤트 객체
        console.log(text)
    }

    return (
        <button
            onClick={onClickButton}
            style = {{color:color}} >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color:"Black",
};

export default Button;