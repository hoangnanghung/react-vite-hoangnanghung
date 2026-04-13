import { useState } from "react";

const ToDoNew = (props) => {
    const { addNewToDo } = props;
    
    // sử dụng useState hook trên component chính trên file App.jsx 
    const [valueInput, setValueInput] = useState("abc");


    const handleClick = () => {
        
    }

    const handleOnChange = (name) => {
        setValueInput(name);
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
            <div>My text input is: {valueInput} </div>
        </div>
    )


}

export default ToDoNew
