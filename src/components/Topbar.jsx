import React from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="h-20 bg-white border-b flex items-center justify-between px-8">
      
      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-80">
        <span className="text-lg mr-2">🔍</span>

        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <button className="text-xl">
          🔔
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3"
        >
          <img
            src="https://cdn.vectorstock.com/i/1000v/79/38/little-girl-profile-avatar-isolated-cute-female-vector-21387938.jpg"
            alt="Ashika Mathi"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="text-left">
            <p className="font-semibold text-gray-800">
              Ashika Mathi
            </p>

            <p className="text-xs text-gray-500">
              Developer
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Topbar;