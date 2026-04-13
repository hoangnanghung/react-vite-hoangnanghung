import { useState } from 'react'
import ToDoNew from './assets/components/todo/ToDoNew'
import img1 from './assets/img1.png'
import './assets/components/todo/todo.css'
import ToDoData from './assets/components/todo/ToDoData'

const App = () => {

  const [toDoList, setTodos] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn Vue" },
    { id: 3, name: "Learn Angular" },
    { id: 4, name: "Learn Node" },
    { id: 5, name: "Learn Express" },
    { id: 6, name: "Learn MongoDB" },
    { id: 7, name: "Learn MySQL" },
  ]);

  const testName = "Hoàng Năng Hưng";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 1000000000);
 


  const addNewToDo = (name) => {
    const newToDo = {
      id: rndInt,
      name: name
    };

    setTodos([...toDoList, newToDo]);
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Todo list</h1>

        <ToDoNew addNewToDo={addNewToDo} />

        <ToDoData
          name={testName}
          age={age}
          data={data}
          toDoList={toDoList}
        />

        <div className="image-box">
          <img src={img1} style={{ width: "50%", margin: "0 auto" }} alt="" />
        </div>
      </div>
    </>
  )
}

export default App