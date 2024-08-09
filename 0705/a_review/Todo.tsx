import React, { useCallback, useMemo, useRef, useState } from 'react'
import './Todo.css';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [ filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const nextIdRef = useRef(0)



  const addTodo = useCallback((text:string) => {
    setTodos(todos => [
      ...todos,
      {id: nextIdRef.current++, text, completed:false }
    ]);

  },[])

  const toggleTodo = useCallback((id: number) => {
    setTodos(todos => todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  },[])

  const deleteTodo = useCallback((id:number) =>  {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  const filteredTodos = useMemo(() => {
    switch(filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        throw new Error ('Unkown filter' + filter)
    }
  },[todos, filter])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if( e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      if(input.value.trim() !== '') {
        addTodo(input.value.trim())
        input.value = '';
      }
    }
  }

  return (
    <div className='app-container'>
      <h2>Todo List</h2>
      <input type="text" className='todo-input' placeholder='Add a new task' onKeyDown={handleInputKeyDown}/>
      <div className='buttons-container'>
        <button onClick={() => setFilter('all')}>All</button>

        {/* 완료 되지 않은 */}
        <button onClick={() => setFilter('active')}>Active</button>
        {/* 완료 된 */}
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <li key={todo.id} className='todo-item'>
            <span className={ `todo-text ${todo.completed? 'completed' : ''}`} 
            onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className='delete-button'>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
