import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, removeTodo} from "../redux/TodoReducer";

const TodoPage = () => {
    const todoReducer = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo({todo: {todo: value, id: todoReducer.todos.length +1}}));
        setValue('');
    }

    const handleDeleteTodo = ({element}) => {
        dispatch(removeTodo({ todo: element }));
    }

    return (
        <div>
            <ul>
                {
                    todoReducer.todos.map((element) => {
                        return <li key={element.id}>
                            {element.todo}
                            <button onClick={() => handleDeleteTodo({element})}> Delete Todo </button>
                        </li>
                    })
                }
            </ul>
            <input type={'text'} value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={handleAddTodo}> Add new Todo </button>
        </div>
    )
}

export default TodoPage;