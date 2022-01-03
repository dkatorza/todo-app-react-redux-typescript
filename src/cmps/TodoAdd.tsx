import { useState} from 'react'
import { useDispatch } from 'react-redux';
import{onAddTodo} from '../store/actions/todoActions'

export const TodoAdd = () => {

  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState('')
  const [placeholder,setPlaceholder] = useState('Doing something?')


  const addTodo = async() => {
    if (!newTodo) {
      setPlaceholder(`You must have something to do... `)
      return
    } 
    const todo = {
      text:newTodo
    }
    await dispatch(onAddTodo(todo))
    setNewTodo('')
  }

  return (
    <div className='todo-add-wrapper'>
      <div className='todo-add-input'>
        <input 
        type="text" 
        placeholder={placeholder}
        onChange={(ev)=> setNewTodo(ev.target.value)} 
        value={newTodo}
        />
      </div>
      <div className='button' onClick={addTodo}>+</div>
    </div>
  );
}