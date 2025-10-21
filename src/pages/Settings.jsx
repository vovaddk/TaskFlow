import { useTheme } from '../context/ThemeContext.jsx';

export default function Settings() {
  const { theme, toggle } = useTheme();

  return (
    <section>
      <h1>Settings</h1>
      <div className="row" style={{ marginTop: 12 }}>
        <span>Theme:</span>
        <button className="button secondary" onClick={toggle}>
          {theme}
        </button>
      </div>
      <p style={{ color: '#94a3b8' }}>
        Few settings for now, but this page demonstrates using Context API for
        global theme state.
      </p>
    </section>
  );
}
