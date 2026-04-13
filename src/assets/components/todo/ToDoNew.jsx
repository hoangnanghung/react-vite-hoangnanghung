
const ToDoNew = (props) => {
    const { addNewToDo } = props;

    return (
        <div className="todo-form">
            <input type="text" placeholder="Enter your task" />
            <button onClick={addNewToDo}>Add</button>
        </div>
    )
}

export default ToDoNew
