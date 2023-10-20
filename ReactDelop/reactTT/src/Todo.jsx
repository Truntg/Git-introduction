/* eslint-disable no-undef */
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
    const {handleSubmit, control} = useForm({
        defaultValue: {
            todoName: "",
        }
    });

    const dispatch = useDispatch();
    const todoStore = useSelector(state => state.todo)
    const onSubmit = (value) =>{
        dispatch(addTodo(value));
    };

  return (
    <div>
        <h2>Todo App</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller name="todoName" control={control}
            render={({field}) => (
                <input{... field} type="text" placeholder="todo"/>
            )}/>

            <button type="submit">Add</button>
        </form>
        <form>
            <ul>
                {todoStore.todo.map((todo, index) => {
                    return(
                        <li key={index}>{todo.todoName}</li>
                    )
                })}
            </ul>
        </form>
    </div>
  )
}

export default Todo