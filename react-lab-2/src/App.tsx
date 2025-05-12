import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Layout from './Pages/Layout'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import { UserContextProvider } from './Context/UserContextProvider'
import TodoList from './Pages/TodoList'

function App() {

  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<Layout />}>
            <Route index element={<Login />}/>
                <Route path="todos" element={<TodoList />}/>
          <Route path='*' element={<NotFound />}/>
          </Route>
          </Routes>     
    </BrowserRouter>
    </UserContextProvider>


  )
}

export default App
