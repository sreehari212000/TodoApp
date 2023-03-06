import './App.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Todo from './Components/Todo';
import { useEffect, useRef, useState } from 'react';

const initialState = JSON.parse(localStorage.getItem('todoes')) || []

function App() {
  const inputRef = useRef(null)
  const [todoList, setTodoList] = useState(initialState)
  function handleSubmit(e){
    e.preventDefault()
    setTodoList([...todoList, {id: new Date().getTime(), task: inputRef.current.value, isCompleted: false}])
    inputRef.current.value = ''
  }
  // function to handle completed task
  function handleCompleted(id){
    const newTodo = todoList.map((todo)=>{
      if(todo.id === id){
        return {...todo, isCompleted: true}
      }else {
        return todo
      }
    })
    setTodoList(newTodo)
  }
  // end of handle completed task
  // ------------ clear Completed function....................
  function clearCompleted(){
    const newTodoes = todoList.filter((todo)=> todo.isCompleted === false)
    setTodoList(newTodoes)
  }
  // --------------end of clear completed function-------------
  // removing todo
  function removeTodo(id){
    const newTodo = todoList.filter((todo)=>todo.id != id)
    setTodoList(newTodo)
  }
  //----------------------------------

  // storing in local storage

    useEffect(()=>{
      localStorage.setItem('todoes', JSON.stringify(todoList))
    }, [todoList])
  // ----------------------------------------
  return (
    <div className="container dark">
      <div className="header">
        <h1>TODO</h1>
        <WbSunnyIcon />
      </div>
      <form className='todo-input' onSubmit={handleSubmit}>
        <input type="text"  placeholder='Enter a todo...' ref={inputRef} required/>
      </form>
      {todoList.map((todo)=>{
        const {id, task, isCompleted} = todo
        return (
          <Todo task={task} key={id} id={id} isCompleted={isCompleted} handleCompleted={handleCompleted}
          removeTodo={removeTodo}/>
        )
      })}

      <div className="todo-info">
        <p onClick={clearCompleted} className='clear-completed'>clear completed</p>
      </div>
    </div>
  );
}

export default App;
