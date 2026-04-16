import { useState } from 'react'
import ToDoNew from "./ToDoNew";
import img1 from "../../assets/img1.png";
import "./todo.css";
import ToDoData from "./ToDoData";

const ToDoApp = () => {
  const [toDoList, setTodos] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000000),
      name: name,
    };

    setTodos([...toDoList, newToDo]);
  };

  const deleteToDo = (id) => {
    const updatedTodos = toDoList.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
    <div className="section-todo">
      <div className="container">
              <h1 className="title">Todo list</h1>

              <ToDoNew addNewToDo={addNewToDo} />

              {/* Cách 1 */}

              {/* {toDoList.length > 0 &&
                
                    <ToDoData
                    // name={testName}
                    // age={age}
                    // data={data}
                    toDoList={toDoList}
                  />
                }
                
                
                {toDoList.length === 0 && 
                  <div className="image-box">
                    <img src={img1} style={{ width: "50%", margin: "0 auto" }} alt="" />
                  </div>
                } */}

              {/* // cách 2 */}

              {toDoList.length > 0 ? (
                <ToDoData toDoList={toDoList} deleteToDo={deleteToDo} />
              ) : (
                <div className="image-box">
                  <img src={img1} style={{ width: "50%", margin: "0 auto" }} alt="" />
                </div>
              )}
            </div>
    </div>
      
    </>
  );
};

export default ToDoApp
