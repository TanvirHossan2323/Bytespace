import { useEffect, useState } from 'react';
import AuthPage from './pages/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';

function getCurrentPath() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routeFromHash = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '';
  const routeFromPath = window.location.pathname.replace(basePath, '');
  return (routeFromHash || routeFromPath).replace(/\/+$/, '') || '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(getCurrentPath());
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  if (currentPath === '/signup') return <AuthPage mode="signup" />;
  if (currentPath === '/login') return <AuthPage mode="login" />;
  return <HomePage />;
}
