import React from 'react'
import SkipToContent from "./components/SkipToContent/SkipToContent";
import "./index.css";

export default function App() {
  return (
    <>
      <SkipToContent />

        <header>
            <nav>
              <a href="#">Home</a> | <a href="#">About</a>
            </nav>
        </header>

        <main id="main-content">
        <h1>It works!</h1>
        <p>
           Press Tab to reveal the “Skip to main content” link, then press Enter to jump here.
        </p>
      </main>
    </>
  );
}
