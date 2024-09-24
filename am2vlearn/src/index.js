import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Welcome from './pages/Welcome'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <LogIn/>
  },
  {
    path: '/signin',
    element: <SignIn/>
  },
  {
    path: '/welcome',
    element: <Welcome/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);