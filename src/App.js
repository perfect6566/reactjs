import React, { useState } from 'react';
import data from "./data/data.json";
//components
import Header from "./header";
import ToDoList from "./todolist";
import './index.css'
import ToDoForm from './todoform';
 

function App() {
  const [ toDoList, setToDoList ] = useState(data);
 

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
// 上下两种函数声明方式都可以
  // function handleToggle(id){
  //     let mapped = toDoList.map(task => {
  //     return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
  //   });
  //   setToDoList(mapped);
  // }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList} setToDoList={setToDoList}  handleToggle={handleToggle}  handleFilter={handleFilter}/>
     <ToDoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;