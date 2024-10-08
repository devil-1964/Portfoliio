import React from 'react'
import Home from "./pages/home.jsx"
import Contact from "./pages/contact.jsx"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import App from './App.jsx'
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
