import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoItem = ({ todo, onCompletedChange }: TodoItemProps) => {

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
            </label>
        </div>
    )
}

export default TodoItem;