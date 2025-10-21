<div align="center">

# 🧩 TaskFlow

### Modern Task Management for Learning React

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A complete React pet project for mastering modern web development**

[Live Demo](#) • [Getting Started](#-installation) • [Roadmap](#-roadmap)

</div>

---

## 📖 About the Project

**TaskFlow** is a minimal yet powerful task management application built with React 18+. Designed as a comprehensive learning project, it covers all essential React fundamentals — from components and hooks to routing and context — in one practical, real-world app.

Whether you're a beginner learning React or looking to refresh your skills, TaskFlow provides a hands-on environment to understand how modern React applications are structured and built.

### ✨ Key Highlights

- 🎯 **Complete React fundamentals** in one project
- 🔥 **Modern stack** with Vite and React Router v6
- 🌓 **Dark/Light theme** with Context API
- 💾 **Persistent storage** using LocalStorage
- 🎨 **Clean, modular architecture** ready to extend
- 📚 **Perfect for learning** and portfolio building

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### Core Functionality
- ✅ Create, edit, and delete tasks
- 📊 Organize tasks by status columns
- 🔍 Filter and search capabilities
- 💾 Auto-save with LocalStorage
- 🌓 Theme switcher (light/dark)

</td>
<td width="50%">

### Technical Features
- ⚛️ Component-based architecture
- 🪝 Modern React Hooks
- 🛣️ Client-side routing
- 🌐 API integration demo
- 📱 Responsive design
- 🎨 Clean CSS styling

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

```
Frontend:        React 18+ • Vite
Routing:         React Router v6
State:           Context API • Custom Hooks
Storage:         LocalStorage
Styling:         Plain CSS (BEM methodology)
Utils:           NanoID
API (Demo):      JSONPlaceholder
```

---

## 📂 Project Structure

```
taskflow/
├── src/
│   ├── components/
│   │   ├── TaskCard.jsx      # Individual task display
│   │   ├── TaskForm.jsx       # Task creation/edit form
│   │   ├── Board.jsx          # Main kanban board
│   │   └── Header.jsx         # Navigation & theme toggle
│   ├── pages/
│   │   ├── Home.jsx           # Main task board view
│   │   ├── About.jsx          # Project information
│   │   └── Settings.jsx       # App settings
│   ├── context/
│   │   └── ThemeContext.jsx   # Global theme state
│   ├── hooks/
│   │   └── useLocalStorage.js # Persistent state hook
│   ├── App.jsx                # Root component & routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── public/
├── package.json
└── vite.config.js
```

---

## 🧠 Learning Outcomes

Building TaskFlow will teach you:

| Concept | What You'll Learn |
|---------|-------------------|
| **Components** | Create reusable, modular UI elements |
| **Props & State** | Manage data flow between components |
| **Hooks** | Use `useState`, `useEffect`, and custom hooks |
| **Forms** | Build controlled inputs with validation |
| **Context API** | Share global state (theme, settings) |
| **Routing** | Navigate between pages with React Router |
| **Side Effects** | Handle async operations and lifecycle events |
| **LocalStorage** | Persist data across browser sessions |
| **API Integration** | Fetch and display external data |
| **Code Organization** | Structure a maintainable React application |

---

## ⚙️ Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Basic knowledge of JavaScript and React

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/vovaddk/taskflow.git

# 2. Navigate to project directory
cd taskflow

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# Visit http://localhost:5173
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `package.json`:**

```json
{
  "homepage": "https://vovaddk.github.io/taskflow",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

2. **Install gh-pages:**

```bash
npm install --save-dev gh-pages
```

3. **Deploy:**

```bash
npm run deploy
```

Your app will be live at `https://vovaddk.github.io/taskflow`

---

## 🗺️ Roadmap

### Phase 1 - Core Improvements
- [ ] 🎯 Drag & drop between columns
- [ ] ⏰ Task deadlines and reminders
- [ ] 🔢 Task priority levels
- [ ] 🏷️ Tags and categories

### Phase 2 - Advanced Features
- [ ] 🔐 User authentication
- [ ] ☁️ Backend integration (Supabase/Firebase)
- [ ] 👥 Multi-user collaboration
- [ ] 📊 Analytics dashboard

### Phase 3 - Technical Upgrades
- [ ] 🔷 Migrate to TypeScript
- [ ] ✨ Add animations (Framer Motion)
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🧪 Unit & integration tests

---

## 📸 Preview

> *Add screenshot here*

```
Coming soon — add ./preview.png to your repository
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

### Vova Dudnyk

**Computer Engineering & Web Development**  
📍 Khmelnytskyi, Ukraine

[![GitHub](https://img.shields.io/badge/GitHub-vovaddk-181717?style=for-the-badge&logo=github)](https://github.com/vovaddk)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for learning, personal projects, or commercial work.

See [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ and React**

⭐ Star this repo if you found it helpful!

</div>