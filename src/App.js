import { useContext } from 'react';

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

import LeftBar from './components/LeftBar/LeftBar';
import NavBar from './components/NavBar/NavBar';
import RightBar from './components/RightBar/RightBar';

import './style.scss';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'light' : 'dark'}`}>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/profile/:id',
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
