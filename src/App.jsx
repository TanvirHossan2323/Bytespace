import AuthPage from './pages/AuthPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath === '/signup') return <AuthPage mode="signup" />;
  if (currentPath === '/login') return <AuthPage mode="login" />;
  return <HomePage />;
}
