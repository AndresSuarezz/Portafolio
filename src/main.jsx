import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/layouts/Navbar.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index:true,
        element: <App/>
      }, {
        path: "/*",
        element: <NotFound/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
