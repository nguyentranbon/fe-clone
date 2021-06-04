// import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './App.scss';



function App(){
  // Declare a new state variable, which we'll call "count"
  const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);

  function removeTodo(index) {
    // Remember to clone into a new array
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    }
    return (
      <ul className="todo-list">
      {todoList.map((todo, index) => (
      <li
      key={todo.id}
      onClick={() => removeTodo(index)}
      >
      {todo.title}
      </li>
      ))}
      </ul>
      )
}


export default App;
