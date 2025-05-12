import type { ITodos } from "../types/todos.type"

type Props = {
    isCompleted: (id: string) => void,
    isDeleted: (id: string) => void
    todo: ITodos
}

const TodoLIstItem = ({isCompleted, isDeleted, todo}: Props) => {
  return (
<>
  <span
    className={`mx-3 text-center text-base ${
      todo.isCompleted ? "text-green-500 line-through" : "text-red-500"
    }`}
  >
    {todo.task}
  </span>

  <button
    onClick={() => isCompleted(todo.id)}
    className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-4 mx-2 transition-colors duration-300"
  >
    Mark {todo.isCompleted ? "Uncompleted" : "Completed"}
  </button>

  <button
    onClick={() => isDeleted(todo.id)}
    className="bg-red-600 text-white rounded-md hover:bg-white hover:text-red-600 py-2 px-4 mx-2 transition-colors duration-300"
  >
    Delete
  </button>
</>


  )
}

export default TodoLIstItem