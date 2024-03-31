import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from '../../component/LoginAndRegister/Login.jsx'
import Register from '../../component/LoginAndRegister/Register.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/project/login",
    element: <Login />,
  },
  {
    path: "/project/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
