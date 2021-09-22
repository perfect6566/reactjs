import React from 'react';

const ToDo = ({todo,toDoList,setToDoList,handleToggle}) => {
    // const handleToggle = (id) => {
    //     let mapped = toDoList.map(task => {
    //       return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    //     });
    //     setToDoList(mapped);
    //   }

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id);
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;