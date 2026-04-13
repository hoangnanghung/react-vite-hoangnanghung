
const ToDoNew = (props) => {
    const { addNewToDo } = props;

    const handleClick = () => {
        alert("handleClick");
    }

    const handleOnChange = (name) => {
        console.log(name);
    }
    
    /* cách code 1 */ 
    // return (
    //     <div className="todo-form">

            
    //         <input onChange={handleOnChange} type="text" placeholder="Enter......" />
    //         <button onClick={handleClick}>Add</button>
    //     </div>
    // )

    /* cách code 2 */

    return (
        <div className="todo-form">
            <input onChange={(event) => handleOnChange(event.target.value)} type="text" placeholder="Enter......" />
            <button onClick={handleClick}>Add</button>
        </div>
    )


}

export default ToDoNew
