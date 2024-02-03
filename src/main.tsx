import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Bills } from './pages/Orders.tsx';
import Menu from './pages/Menu.tsx';
import { NewDish } from './pages/NewDish.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import firebase, { FirebaseContext } from './firebase'
import StoreProvider from './context/store.tsx';
// import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: '/bills',
        element: <Bills />
      },
      {
        path: '/home',
        element: <Menu />
      },
      {
        path: '/new-dish',
        element: <NewDish />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <FirebaseContext.Provider value={firebase}>
      <ThemeProvider>
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </ThemeProvider>
    </FirebaseContext.Provider>
  </>,
)
