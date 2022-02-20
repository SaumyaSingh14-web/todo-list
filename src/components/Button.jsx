function Button(props){
    return(
        <div className="bg-blue-400 rounded-md border hover:bg-blue-500 hover:outline hover:outline-blue-200 shadow-md w-3/12 p-2 text-xs focus:outline-none focus:shadow-sm"><button>{props.btn}</button></div>
    );
}

export default Button;