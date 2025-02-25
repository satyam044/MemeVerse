import React from 'react'
import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App