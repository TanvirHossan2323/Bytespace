import AuthPage from './pages/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routeFromHash = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '';
  const routeFromPath = window.location.pathname.replace(basePath, '');
  const currentPath = (routeFromHash || routeFromPath).replace(/\/+$/, '') || '/';

  if (currentPath === '/signup') return <AuthPage mode="signup" />;
  if (currentPath === '/login') return <AuthPage mode="login" />;
  return <HomePage />;
}
