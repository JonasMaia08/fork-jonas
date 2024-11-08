import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import ProfileSelect from '../pages/ProfileSelect';
import LoginAtleta from "../pages/LoginAtleta";
import LoginGestor from "../pages/LoginGestor";
import LoginProfessor from "../pages/LoginProfessor";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        index: true,
        element: <Home/>,
      },
      {
        path: '/profile-select',
        index: true,
        element: <ProfileSelect/>,
      },
      {
        path: '/login-atleta',
        index: true,
        element: <LoginAtleta/>,
      },
      {
        path: '/login-professor',
        index: true,
        element: <LoginProfessor/>,
      },
      {
        path: '/login-gestor',
        index: true,
        element: <LoginGestor/>,
      },
    ],
  },
]);

export default router;