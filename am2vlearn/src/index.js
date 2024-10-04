import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import App from './App'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import SubjectMenu from './pages/SubjectMenu'
import DownloadContent from './pages/DownloadContent'
import GerenciadorDeQuestoes from './pages/GerenciadorDeQuestoes'
import './styles/index.css'

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
        // element: <ProtectedRoute element = {<SubjectMenu />} />,
        element: <SubjectMenu />,
      },
      {
        path: 'downloadcontent',
        // element: <ProtectedRoute element = {<DownloadContent />} />,
        element: <DownloadContent />,
      },
      {
        path: 'gerenciadorDeQuestoes',
        // element: <ProtectedRoute element = {<GerenciadorDeQuestoes />} />,
        element: <GerenciadorDeQuestoes />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);