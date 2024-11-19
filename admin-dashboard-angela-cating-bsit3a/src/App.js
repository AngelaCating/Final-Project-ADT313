import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/Public/Login/LoginPage';
import Dashboard from './pages/Main/Dashboard/Dashboard';
import Main from './pages/Main/Main';
import RegisterPage from './pages/Public/Register/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/Register',
    element: <RegisterPage />,
  },
  {
    path: '/Main',
    element: <Main />,
    children: [
      {
        path: 'Dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;