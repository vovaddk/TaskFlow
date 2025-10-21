import TaskCard from './TaskCard.jsx';

export default function Board({ tasks, onEdit, onDelete, onMove }) {
  const columns = [
    { key: 'todo', title: 'To Do' },
    { key: 'inprogress', title: 'In Progress' },
    { key: 'done', title: 'Done' },
  ];

  return (
    <div className="grid">
      {columns.map((col) => {
        const list = tasks.filter((t) => t.status === col.key);
        return (
          <section key={col.key} className="column" aria-label={col.title}>
            <h4 className="column__title">
              <span>{col.title}</span>
              <span className="badge">{list.length}</span>
            </h4>
            {list.length === 0 ? (
              <p style={{ color: '#94a3b8', margin: 0 }}>No tasks here yet</p>
            ) : (
              list.map((t) => (
                <TaskCard
                  key={t.id}
                  task={t}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onMove={onMove}
                />
              ))
            )}
          </section>
        );
      })}
    </div>
  );
}
