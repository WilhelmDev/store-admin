import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Orders } from './pages/Orders.tsx';
import Menu from './pages/Menu.tsx';
import { NewDish } from './pages/NewDish.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import firebase, { FirebaseContext } from './firebase'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/new-dish',
        element: <NewDish />
      }
    ]
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/new-dish',
    element: <NewDish />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firebase}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
