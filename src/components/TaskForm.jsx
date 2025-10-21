import { useEffect, useState } from 'react';

const empty = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'normal',
};

export default function TaskForm({ onSave, draft, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(draft ? { ...empty, ...draft } : empty);
  }, [draft]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave({ ...form });
    setForm(empty);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <input
          className="input"
          placeholder="Title *"
          value={form.title}
          onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
        />
        <select
          className="select"
          value={form.status}
          onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <select
          className="select"
          value={form.priority}
          onChange={(e) => setForm((s) => ({ ...s, priority: e.target.value }))}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>

      <textarea
        className="input"
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) =>
          setForm((s) => ({ ...s, description: e.target.value }))
        }
      />

      <div className="row">
        <button className="button" type="submit">
          {draft ? 'Save' : 'Add task'}
        </button>
        {draft && (
          <button className="button ghost" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
