
import ToDoNew from './assets/components/todo/ToDoNew'
import img1 from './assets/img1.png'
import './assets/components/todo/todo.css'
import ToDoData from './assets/components/todo/ToDoData'

const App = () => {
  
  const testName = "Hoàng Năng Hưng";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }

  const addNewToDo = () => {
    alert("Add new todo");
  }

  

  return (
    <>
      <div className="container">
        <h1 className="title">Todo list</h1>

        <ToDoNew
        addNewToDo = {addNewToDo}
         />

        <ToDoData
          name = {testName}
          age = {age}
          data = {data}
          
        
        />

        <div className="image-box">
          <img src={img1} style={{width: "50%", margin: "0 auto"}} alt="" />
        </div>
      </div>
    </>
  )
}

export default App