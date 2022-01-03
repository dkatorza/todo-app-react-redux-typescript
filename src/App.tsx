import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TodoAdd } from './cmps/TodoAdd'
import { TodoEdit } from './cmps/TodoEdit'
import { TodoFilter } from './cmps/TodoFilter'
import { ReactComponent as Edit } from './assets/img/iconmonstr-pencil-14.svg';
import { ReactComponent as Trashcan } from './assets/img/iconmonstr-trash-can-2.svg';
import { Footer } from './cmps/Footer'
import { getTodos, onRemoveTodo, onEditTodo } from './store/actions/todoActions'
import { onSetPopover, onSetEditPos } from './store/actions/appActions'


function App() {

  const { todos } = useSelector(state => state.todoModule)
  const { popover } = useSelector(state => state.appModule)
  const dispatch = useDispatch()

  const [currTodo, setCurrTodo] = useState('')
  const [editTodoMargin, setEditTodoMargin] = useState(0)
  const todoEl = useRef(null);

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const onChangeFilter = async (filterBy) => {
    await getTodos(filterBy)
  };

  const completeTodo = async (ev, todo) => {
    ev.stopPropagation()
    todo.complete = !todo.complete
    dispatch(onEditTodo(todo))
  }

  const removeTodo = async (ev, id) => {
    ev.stopPropagation()
    dispatch(onRemoveTodo(id))
    setEditTodoMargin(0)
  }

  const popoverEdit = async (ev, todo) => {
    ev.stopPropagation()
    setCurrTodo(todo)
    const elPos = await ev.target.getBoundingClientRect()
    checkScrollHeight()
    dispatch(onSetEditPos(elPos))
    dispatch(onSetPopover(!popover))
  }


  const checkScrollHeight = () => {
    if (todoEl.current.scrollHeight > 650) {
      setEditTodoMargin(8)
    }
  }

  if (!todos) return <div>Loading...</div>;
  return (
    <div className="app-general">
      <div className="logo">
        <h1>Toodlidoo</h1>
      </div>
      <div className="title">
        <TodoFilter onChangeFilter={onChangeFilter} />
        <TodoAdd />
      </div>
      <div className="todos scroller" ref={todoEl} >
        {todos.map(todo => (
          <div
            className={'todo   ' + (todo.complete ? 'completed' : '')}
            key={todo._id}
            onClick={(ev) => completeTodo(ev, todo)}

          >
            <div className='checkbox'></div>
            <div className='text'>{todo.text}</div>
            <div className='edit-tools'>
              <div className='edit-todo'
                onClick={(ev) => popoverEdit(ev, todo)}><Edit className='svg' /></div>
              <div className='delete-todo'
                onClick={(ev) => removeTodo(ev, todo._id)}><Trashcan className='svg' /></div>
            </div>
          </div>
        ))}
      </div>
      {popover &&
        <TodoEdit
          currTodo={currTodo}
          editTodoMargin={editTodoMargin}
        />}
      <Footer />
    </div>

  );
}

export default App;
