# React for Accessibility

This project is a small React app focused on building basic accessible components. It includes a SkipToContent link, Header, Top Navigation, Sidebar, Footer, and simple UI elements like Button, Label, TextBox, Anchor component, and Table. The goal is to create a minimal component library that follows good accessibility practices, is reusable, and is easy to understand.

## Features

- SkipToContent link placed at the top for keyboard navigation
- Header and TopNav layout structure
- Accessible Button component with proper labeling
- Accessible Label component tied to form inputs
- TextBox input with clear styling and keyboard focus behavior
- Anchor component with proper target and rel handling
- Collapsible Sidebar with keyboard-only and screen reader support
- Accessible-first table using semantic `<table>`, `<thead>`, `<tbody>`, and `<caption>`
- Simple layout structure that keeps content readable and easy to navigate

## Accessibility

This project focuses on:

- Semantic HTML (`header`, `main`, `footer`, `nav`, `aside`, `table`)
- Keyboard navigation (SkipToContent, visible focus states, tabbable controls)
- Screen reader support (proper labels, headings, and ARIA where needed)
- Avoiding unnecessary ARIA when native elements already do the job

## Tech

- React with Vite
- CSS modules for component-level styles

## Running the project

Install dependencies:
npm install

Start the development server:
npm run dev

Open the app in a browser at the URL Vite prints in the terminal.

## Project structure

src/
components/
Anchor/
Button/
Footer/
Header/
Label/
Sidebar/
SkipToContent/
Table/
TextBox/
TopNav/
App.jsx
main.jsx

## Notes

This is mainly for practicing accessibility patterns in React. The components are intentionally simple and the styling is minimal so the focus stays on functionality and structure.
