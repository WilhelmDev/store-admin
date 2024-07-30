import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Bills } from './pages/Orders.tsx';
import Menu from './pages/Menu.tsx';
import { NewDish } from './pages/NewDish.tsx';
import { Sidebar } from './components/Sidebar.tsx';

// import StoreProvider from './context/store.tsx';
import Workpeople from './pages/Workpeople.tsx';
import FirebaseProvider from './firebase/context.tsx';
import { routes } from './constants/routes.ts';
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
        path: routes.Dashboard,
        element: <Menu />
      },
      {
        path: '/new-dish',
        element: <NewDish />
      },
      {
        path: '/workpeople',
        element: <Workpeople />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <FirebaseProvider>
      <ThemeProvider>
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </ThemeProvider>
    </FirebaseProvider>
  </>,
)
