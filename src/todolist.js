import React from 'react';
import ToDo from './todo';

const ToDoList = ({toDoList, setToDoList,handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} toDoList={toDoList} setToDoList={setToDoList} handleToggle={handleToggle}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;