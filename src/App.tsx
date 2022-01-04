import { useState, useEffect, useRef} from 'react'
import { TodoAdd } from './cmps/TodoAdd'
import { TodoEdit } from './cmps/TodoEdit'
import { TodoFilter } from './cmps/TodoFilter'
import { ReactComponent as Edit } from './assets/img/iconmonstr-pencil-14.svg';
import { ReactComponent as Trashcan } from './assets/img/iconmonstr-trash-can-2.svg';
import { Footer } from './cmps/Footer'
import { getTodos, onRemoveTodo, onEditTodo } from './store/actions/todoActions'
import { onSetPopover, onSetEditPos } from './store/actions/appActions'
import { useAppDispatch, useAppSelector } from './hooks/redux-ts-hooks';
import { Itodo } from './store/types/Itodo';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';



function App() {

  const { todos } = useAppSelector(state => state.todoModule)
  const { popover } = useAppSelector(state => state.appModule)
  const dispatch  = useDispatch()

  const [currTodo, setCurrTodo] =  useState<Itodo | null>(null)
  const [editTodoMargin, setEditTodoMargin] = useState(0)
  const todoEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getTodos(''))
  }, [])

  const onChangeFilter = async (filterBy: undefined) => {
    await getTodos(filterBy)
  };

  const completeTodo = async (ev: React.MouseEvent<Element, globalThis.MouseEvent>, todo:Itodo) => {
    ev.stopPropagation()
    todo.completed = !todo.completed
    dispatch(onEditTodo(todo))
  }

  const removeTodo = async (ev: React.MouseEvent<Element, globalThis.MouseEvent>, id: string) => {
    ev.stopPropagation()
    dispatch(onRemoveTodo(id))
    setEditTodoMargin(0)
  }

  const popoverEdit = async (ev: React.MouseEvent<Element, globalThis.MouseEvent>, todo:Itodo) => {
    ev.stopPropagation()
    setCurrTodo(todo)
    const elPos = await ev.currentTarget.getBoundingClientRect()
    checkScrollHeight()
    dispatch(onSetEditPos(elPos))
    dispatch(onSetPopover(!popover))
  }


  const checkScrollHeight = () => {
    if (todoEl.current && todoEl.current.scrollHeight > 650) {
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
        {todos.map((todo) => (
          <div
            className={'todo   ' + (todo.completed ? 'completed' : '')}
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
