import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from '../src/component/LoginAndRegister/Login.jsx';
import Register from '../src/component/LoginAndRegister/Register.jsx';
import App from '../src/App.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App2 from '../src/component/CarShoowroom/App.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carshowroom",
    element: <App2 />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)