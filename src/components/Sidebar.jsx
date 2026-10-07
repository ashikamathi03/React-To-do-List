import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "To Do List", path: "/todo", icon: "📋" },
    { name: "In Progress", path: "/progress", icon: "⏳" },
    { name: "Finished", path: "/finished", icon: "✅" },
    { name: "Cancelled", path: "/cancelled", icon: "❌" },
  ];

  return (
    <div className="w-64 min-h-screen bg-purple-900 text-white p-6 fixed left-0 top-0">
      
      
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Task<span className="text-yellow-300">Flow</span>
        </h1>

        <p className="text-purple-300 text-sm mt-1">
          Manage your tasks
        </p>
      </div>

     
      <div className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-white text-purple-900 font-semibold"
                  : "text-purple-100 hover:bg-purple-800"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      
      <div className="absolute bottom-8 left-6 right-6">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl ${
              isActive
                ? "bg-white text-purple-900"
                : "text-purple-100 hover:bg-purple-800"
            }`
          }
        >
          <span className="text-xl">👤</span>
          <span>Profile</span>
        </NavLink>

        <button className="w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-purple-100 hover:bg-purple-800">
          <span className="text-xl">⚙️</span>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;