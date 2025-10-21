import { useTheme } from '../context/ThemeContext.jsx';

export default function Header({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  const { theme, toggle } = useTheme();

  return (
    <div className="toolbar" role="region" aria-label="Toolbar">
      <input
        className="input"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="select"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All statuses</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <div className="spacer" />
      <button
        className="button secondary"
        onClick={toggle}
        title="Toggle theme"
      >
        Theme: {theme}
      </button>
    </div>
  );
}
