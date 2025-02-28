import React from 'react'
import './App.css'
import Home from './Home'
import Explore from './explore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/explore",
      element:<Explore/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App