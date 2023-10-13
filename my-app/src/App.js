import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ptashka blog</h1>
      </header>

      <div
        className={`App-container ${
          isSidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <aside
          className={`App-sidebar ${
            isSidebarCollapsed ? "App-sidebar-collapsed" : ""
          }`}
        >
          <ul>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">My project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </aside>

        <button className="btn" onClick={toggleSidebar}>
          {" "}
          Click me!
        </button>

        <main className="App-main">
          <h2>My interests</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
