import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDeleteTodo }: TodoItemProps) => {

    return (
        <div>
            <label className="flex items-center gap-2 rounded-md p-2 border border-gray-400 bg-white hover:bg-slate-50">
                <input
                    type="checkbox"
                    className="scale-125 mx-3"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                />
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
                <div className="flex justify-end w-full">
                    <button onClick={() => { onDeleteTodo(todo.id) }} className="bg-red-500 w-14 rounded text-center shadow text-white hover:bg-red-700 cursor-pointer">Delete</button>
                </div>
            </label>
        </div>
    )
}

export default TodoItem;