import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CheckMark } from '../assets/img/iconmonstr-check-mark-1.svg';
import { ReactComponent as Xmark } from '../assets/img/iconmonstr-x-mark-1.svg';
import { onEditTodo } from '../store/actions/todoActions'
import { onSetPopover } from '../store/actions/appActions'

export const TodoEdit = ({currTodo, editTodoMargin }) => {
    const { popover,editPos } = useSelector(state => state.appModule)
    const dispatch = useDispatch()

    const [todoTitle, setTodoTitle] = useState('')
    const inputEl = useRef(null);

    useEffect(() => {
        setTodoTitle(currTodo.text)
        inputEl.current.focus();
    }, [currTodo])

    const dismissChanges = () => {
        dispatch(onSetPopover(!popover))
    }

    const editTodo =  () => {
        if (!todoTitle) {
            return
        }
        currTodo.text = todoTitle
        dispatch(onEditTodo(currTodo))
        dispatch(onSetPopover(!popover))
        setTodoTitle('')
    }

    return (
        <>
            <div className='edit-todo-wrapper'
                style={{
                    top: editPos.top - 20 + 'px',
                    left: editPos.left - 366 + 'px',
                }}>
                <div className='edit-todo-input' style={{ marginLeft: editTodoMargin }}>
                    <input type="text"
                        onChange={(ev) => setTodoTitle(ev.target.value)}
                        defaultValue={todoTitle}
                        ref={inputEl}
                        onBlur={editTodo}
                    />
                </div>
                <div className='button' onClick={editTodo}><CheckMark className='svg' /></div>
                <div className='button' onClick={dismissChanges}><Xmark className='svg' /></div>
            </div>
        </>
    );
}