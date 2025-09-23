// src/routes.js
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage/LangingPage';
// import otros componentes

const routes = [
  {
    path: '/',
    element: <LandingPage />,
    // podrías agregar loader, errorElement, etc.
  },
  {
    path: '/home',
    element: <Home />,
    // podrías agregar loader, errorElement, etc.
  },
  // etc.
];

export default routes;
