import {  useState, type FormEvent } from "react"
import type { ITodos } from "../types/todos.type"
import { useUser } from "../Context/useUser"
import toast from "react-hot-toast"
import { v4 } from "uuid"
import TodoLIstItem from "./TodoLIstItem"
import { Link } from "react-router-dom"

const TodoList = () => {
   const {fullname, loggedIn, setIsLogin } = useUser()
   const [task, setTask] = useState<ITodos[]>([])
   const [taskInput, setTaskInput] = useState<string>("")

   
    const handleAddTask = (task: string) => {
      setTask(prev => {
         const newTask = {
            id: v4(),
            task,
            completed: false
         }
         return [...prev, newTask]
      })
   }

 const handleCompleteTask = (id: string) => {
      setTask(prev => 
         prev.map(task => 
            task.id === id ? { ...task, completed: !task.isCompleted }
            : task
         )
      )
      toast.success("To Do updated successfully!")
   }



 const handleDeleteTask = (id: string) => {
      setTask(prev => 
         prev.filter(task => task.id !== id)
      )
      toast.error("To Do deleted successfully!")
   }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleAddTask(taskInput)
      setTaskInput('')
   } 


  return (
   <>
  {loggedIn ? (
    <div className="bg-gray-900 flex flex-col m-auto justify-center items-center p-10 rounded-lg shadow-lg w-full max-w-2xl animate-fade-in">
      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-2xl text-white font-semibold">Welcome, {fullname}!</h2>
        <button
          onClick={() => {
            setIsLogin(false);
            toast.success("Logout successfully!");
          }}
          className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-4 transition-colors"
        >
          Log Out
        </button>
      </div>

      <h3 className="text-lg text-white mb-6 italic">Have a nice and Productive Day!</h3>

      <div className="w-full mb-6 space-y-3">
        {task.map(t => (
          <div
            key={t.id}
            className="bg-gray-300 px-4 py-3 flex justify-between items-center rounded-md shadow-sm transition-transform hover:scale-[1.02]"
          >
            <TodoLIstItem
              key={t.id}
              todo={t}
              isCompleted={handleCompleteTask}
              isDeleted={handleDeleteTask}
            />
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="bg-gray-800 text-white border border-white mr-4 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white transition-all"
          />
          <button
            className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-4 transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="bg-gray-900 flex flex-col m-auto justify-center items-center p-10 rounded-lg shadow-lg w-full max-w-lg animate-fade-in">
      <h2 className="text-xl text-white mb-6">To add todos, please log in from the previous page.</h2>
      <Link to="/" className="text-white underline hover:text-blue-400 transition-colors">
        Go back
      </Link>
    </div>
  )}
</>
  )
    
  
}

export default TodoList


