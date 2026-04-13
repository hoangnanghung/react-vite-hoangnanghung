
const ToDoData = (props) => {
    //props là 1 biến object trên component chính trên file App.jsx 
    // console.log(props);
    // cách code 1
    const {name, age, data} = props; // destructuring object props 

    // cách code 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data; 
    // console.log(name, age, data);

    // cách code 3


    return (
        <div className="todo-data">
          <div>My name is {name}</div>
          <div>Age {age}</div>
          <div>Learning</div>
          <div>Watch</div>
        </div>
        
    )
}

export default ToDoData