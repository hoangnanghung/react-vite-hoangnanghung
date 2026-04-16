<<<<<<< HEAD
import {useState} from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import {myData, EXAMPLES, arrListBook} from "../data.js";
import TabButton from "./components/TabButton.jsx";
import Book from "./components/Book/Book.jsx";
function App() {
  // const kq = myData.map((item) => ({...item}));

  // console.log(kq);
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}

            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}

          </ul>
        </section>

        <div>
          <h2>Danh sách sách yêu thích</h2>

          {arrListBook.map((item, index) => (
            <Book key={index} name={item.name} />
          ))}
        </div>

        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            <TabButton
              isSelected={selectedTopic==="components"}
              onSelect={()=>{handleSelect('components')}}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={()=>{handleSelect('state')}}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
=======
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
>>>>>>> 08d938356e091324cd4b8c03edf627c2adac5ce7
