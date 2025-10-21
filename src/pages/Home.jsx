import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Header from '../components/Header.jsx';
import TaskForm from '../components/TaskForm.jsx';
import Board from '../components/Board.jsx';

export default function Home() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    async function bootstrap() {
      if (tasks.length > 0) return;
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        );
        const data = await res.json();
        const mapped = data.map((d) => ({
          id: nanoid(),
          title: d.title[0].toUpperCase() + d.title.slice(1),
          description: '',
          status: d.completed ? 'done' : 'todo',
          priority: d.completed ? 'low' : 'normal',
          createdAt: Date.now(),
        }));
        setTasks(mapped);
      } catch {
        // ignore
      }
    }
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addOrUpdateTask(payload) {
    if (editing) {
      setTasks((list) =>
        list.map((t) => (t.id === editing.id ? { ...t, ...payload } : t))
      );
      setEditing(null);
    } else {
      const t = {
        id: nanoid(),
        createdAt: Date.now(),
        ...payload,
      };
      setTasks((list) => [t, ...list]);
    }
  }

  function deleteTask(id) {
    setTasks((list) => list.filter((t) => t.id !== id));
    setEditing((e) => (e?.id === id ? null : e));
  }

  function moveTask(id, nextStatus) {
    setTasks((list) =>
      list.map((t) => (t.id === id ? { ...t, status: nextStatus } : t))
    );
  }

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter((t) => {
      const okStatus =
        statusFilter === 'all' ? true : t.status === statusFilter;
      const okQuery =
        q.length === 0 ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return okStatus && okQuery;
    });
  }, [tasks, search, statusFilter]);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TaskForm
        onSave={addOrUpdateTask}
        draft={editing}
        onCancel={() => setEditing(null)}
      />

      <Board
        tasks={visible}
        onEdit={setEditing}
        onDelete={deleteTask}
        onMove={moveTask}
      />
    </>
  );
}
