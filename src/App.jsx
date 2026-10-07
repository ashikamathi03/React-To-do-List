import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Area */}

        <div className="ml-64 flex-1">

          <Topbar />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/todo" element={<TodoList />} />

            <Route path="/profile" element={<Profile />} />

            {/* Temporary routes */}

            <Route
              path="/progress"
              element={
                <TodoList />
              }
            />

            <Route
              path="/finished"
              element={
                <TodoList />
              }
            />

            <Route
              path="/cancelled"
              element={
                <TodoList />
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;