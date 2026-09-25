# React State Management – useContext & useReducer

This is a guided learning activity I did to practice using `useContext` and `useReducer` in React with TypeScript.

The app has two main parts:
- A **theme switcher** that toggles between light and dark mode using the Context API
- A **task manager** where you can add and remove tasks using `useReducer`

---

## What I used

- Vite + React + TypeScript
- CSS Modules for styling
- GitHub for version control

---

## Colors

| Theme | Background | Text | Button |
|-------|------------|------|--------|
| Light | #FFFFFF | #000000 | #1E90FF |
| Dark | #242629 | #FFFFFF | #85D1B0 |

---

## How to run it

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173/`

---

## Project structure

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

## Part 1 – Theme Switcher

I created a `ThemeContext` that holds the current theme and a `toggleTheme` function. I wrapped the whole app in `ThemeProvider` so any component can access the theme.

I also made a `useTheme` custom hook that throws an error if you try to use it outside the provider, which I thought was a good safety check.

The `Navbar` uses `useTheme` to show a button that switches between light and dark mode. The button text updates based on the current theme using the `LIGHT_THEME` and `DARK_THEME` constants.

---

## Part 2 – Task Manager

For the task manager I used `useReducer` with typed actions. The reducer handles two actions:
- `add` – adds a new task with a unique id using `Date.now()`
- `remove` – filters out the task by id

The `TaskManager` component also uses `useTheme` so the background and text colors change with the theme. The add button is disabled if the input is empty.

---

## Build

```bash
npm run build
```
