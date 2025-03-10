import { useState } from "react"
import TodoItem from "./component/TodoItem"
import { dummyData } from "./data/todo"

function App() {

  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`Todo with id ${id} is now ${completed ? 'completed' : 'not complted'}`)
    setTodos((prevTodos) =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, completed } : todo))
    )
  }
  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-center text-3xl mb-3'>Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompletedChange={setTodoCompleted}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
