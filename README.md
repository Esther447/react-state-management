# React Guided Learning Activity: Theme Switcher & useReducer

**Title:** Implementing a Theme Switcher with useContext & State Management with useReducer

**Objective:** Learn how to use the React Context API (`useContext`) for global state management (theme switching) and `useReducer` for managing complex state (task manager).

---

## Tools
- GitHub Classroom
- GitHub Codespaces (or a local development environment with Node.js and VS Code)
- Vite
- React
- TypeScript

---

## Color Palette

| Theme | Background | Text | Button |
|-------|------------|------|--------|
| Light | `#FFFFFF` | `#000000` | `#1E90FF` |
| Dark | `#242629` | `#FFFFFF` | `#85D1B0` |

---

## Project Setup

```bash
npm create vite@latest react-state-management -- --template react-ts
cd react-state-management
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── TaskManager.tsx
│   └── TaskManager.module.css
├── constants/
│   └── theme.ts
├── context/
│   └── ThemeContext.tsx
├── reducers/
│   └── taskReducer.ts
├── App.tsx
└── main.tsx
```

---

## Section 1: Theme Switcher with useContext

### Theme Constants (`src/constants/theme.ts`)
Defines `LIGHT_THEME` and `DARK_THEME` string constants used across the app.

### Theme Context (`src/context/ThemeContext.tsx`)
- Creates a typed context with `theme` and `toggleTheme`
- Exports `ThemeProvider` to wrap the app
- Exports `useTheme` custom hook with a guard for usage outside the provider

### Navbar (`src/components/Navbar.tsx`)
- Consumes `useTheme` via the custom hook
- Displays a toggle button that switches between light and dark mode
- Button text reflects the current theme using the constants

---

## Section 2: State Management with useReducer

### Task Reducer (`src/reducers/taskReducer.ts`)
- Typed `Task`, `TaskState`, and `TaskAction` types
- Handles `add` (appends a new task) and `remove` (filters by id) actions

### Task Manager (`src/components/TaskManager.tsx`)
- Uses `useReducer` with the task reducer
- Uses `useTheme` to apply light/dark styles
- Add button is disabled when the input is empty

---

## Running the App

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
