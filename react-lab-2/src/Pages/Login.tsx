import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../Context/useUser"
import toast from "react-hot-toast"


const Login = () => {
const {fullname, setFullname, loggedIn, setIsLogin} = useUser()
const [userName] = useState<string>( )
    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent) =>  {
        e.preventDefault()
      setIsLogin(true)
      navigate('todos')
    }

 




  return (
   <div className="bg-gray-900 flex flex-col m-auto justify-center items-center p-10 rounded-lg shadow-lg w-[400px] animate-fade-in scale-in">
  <h2 className="text-2xl text-white mb-6 font-semibold">Hi, what's your name?</h2>
  <form onSubmit={handleSubmit} className="w-full flex items-center">
    <input
      type="text"
      placeholder="Your Name"
      value={userName}
      onChange={e => setFullname(e.target.value)}
      className="flex-grow bg-gray-800 text-white border border-white mr-4 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all"
    />
    {fullname && (
      <button className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-4 transition-colors duration-300">
        <Link to="/todos">Login</Link>
      </button>
    )}
  </form>
</div>
  )
  
}

export default Login