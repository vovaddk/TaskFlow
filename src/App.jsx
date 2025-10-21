import { Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Settings from './pages/Settings.jsx';

function Shell() {
  const { theme } = useTheme();

  return (
    <div className={`app app--${theme}`}>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/settings" className="nav__link">
            Settings
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>

      <footer className="footer">TaskFlow · React pet-project</footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
