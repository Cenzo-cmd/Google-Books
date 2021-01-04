function Button(props) {
    console.log("$$$$$$$$$$$$$$$ button", props)
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className={props.className}>
            {props.children}
        </button>
    );
}

export default Button;