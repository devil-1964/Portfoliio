import React from 'react'
import Home from "./pages/home"
import Contact from "./pages/contact"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import App from './app'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    }
    ,
    {
      path: "/contact",
      element: <Contact />
    }
  ]
},
{
  path: "/*"
  , element: <Navigate to="/" />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
