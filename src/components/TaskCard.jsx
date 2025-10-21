export default function TaskCard({ task, onEdit, onDelete, onMove }) {
  const { title, description, status, priority, createdAt } = task;

  const statusNext =
    status === 'todo' ? 'inprogress' : status === 'inprogress' ? 'done' : null;
  const statusPrev =
    status === 'done' ? 'inprogress' : status === 'inprogress' ? 'todo' : null;

  return (
    <article className="card" aria-label={`Task: ${title}`}>
      <header className="row">
        <h3 className="card__title">{title}</h3>
        <div className="spacer" />
        <span className="badge">{priority}</span>
      </header>

      {description && (
        <p style={{ margin: 0, color: '#cbd5e1' }}>{description}</p>
      )}

      <div className="row" style={{ fontSize: 12, color: '#94a3b8' }}>
        <span>Created: {new Date(createdAt).toLocaleString()}</span>
        <div className="spacer" />
        <span className="badge">{status}</span>
      </div>

      <div className="row">
        <button className="button secondary" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="button ghost" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <div className="spacer" />
        {statusPrev && (
          <button
            className="button ghost"
            onClick={() => onMove(task.id, statusPrev)}
            title="Move left"
          >
            ←
          </button>
        )}
        {statusNext && (
          <button
            className="button ghost"
            onClick={() => onMove(task.id, statusNext)}
            title="Move right"
          >
            →
          </button>
        )}
      </div>
    </article>
  );
}
