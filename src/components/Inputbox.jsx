function Inputbox(props){
    return (
        <div>
            <div className="border-1 h-10 w-2/4 text-gray-900 focus:border-blue-400"><input type="text" name="todo" placeholder="Enter" autoComplete="off" aria-label="Enter"  />{props.inputbox}</div>

        </div>
    );
}

export default Inputbox;