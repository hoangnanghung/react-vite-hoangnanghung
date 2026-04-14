import { useState } from 'react'
import ToDoNew from './components/todo/ToDoNew'
import img1 from './assets/img1.png'
import './components/todo/todo.css'
import ToDoData from './components/todo/ToDoData'
import Header from './components/layout/header'
import Footer from './components/layout/Footer'
import { Outlet } from 'react-router-dom'


const App = () => {

  const [toDoList, setTodos] = useState([
    // { id: 1, name: "Learn React" },
    // { id: 2, name: "Learn Vue" },
    // { id: 3, name: "Learn Angular" },
    // { id: 4, name: "Learn Node" },
    // { id: 5, name: "Learn Express" },
    // { id: 6, name: "Learn MongoDB" },
    // { id: 7, name: "Learn MySQL" },
  ]);

  // const testName = "Hoàng Năng Hưng";
  // const age = 25;
  // const data = {
  //   address: "Ha Noi",
  //   country: "Viet Nam"
  // }


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000000),
      name: name
    };

    setTodos([...toDoList, newToDo]);
  }

  const deleteToDo = (id) => {
    const updatedTodos = toDoList.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
    <Header />
    <Outlet />
    
    <Footer />
    </>
  )
}

export default App
