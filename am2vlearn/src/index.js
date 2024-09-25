import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import SubjectMenu from './pages/SubjectMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to = "/welcome" replace />,
      },
      {
        path: '*',
        element: <Navigate to = "/welcome" replace />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'home',
        element: <ProtectedRoute element = {<Home />} />,
      },
      {
        path: 'subjectmenu',
        element: <ProtectedRoute element = {<SubjectMenu />} />,
      }
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);