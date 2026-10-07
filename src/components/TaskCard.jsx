import React from "react";

function TaskCard({ task, deleteTask, editTask }) {

  return (
    <div className="bg-white rounded-2xl p-5 border shadow-sm">

      {/* Top */}
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {task.title}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            {task.description}
          </p>
        </div>

        {/* Priority */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {task.priority}
        </span>

      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-5">

        <div>
          <span className="text-sm text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {task.status}
          </span>

          <span className="text-xs text-gray-400 ml-3">
            {task.date}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">

          <button
            onClick={() => editTask(task)}
            className="text-blue-600"
          >
            ✏️
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600"
          >
            🗑️
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;