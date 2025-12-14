# React for Accessibility

This project is a small React app focused on building basic accessible components. It includes a SkipToContent link, Header, Top Navigation, Sidebar, Footer, and simple UI elements like Button, Label, TextBox, Anchor Element and Table. The goal is to create a minimal component library that follows good accessibility practices, is reuseable and is easy to understand.

## Features

- SkipToContent link placed at the top for keyboard navigation
- Header and TopNav layout structure
- Accessible Button component with proper labeling
- Accessible Label component tied to form inputs
- TextBox input with clear styling and keyboard focus behavior
- Anchor component with proper target and rel handling
- Collapsible Sidebar with KO and SR support
- Accessible first Table
- Simple layout structure that keeps content readable

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
