import React, { useState } from "react";

function AddTaskModal({ closeModal, addTask, editTask }) {

  const [title, setTitle] = useState(
    editTask ? editTask.title : ""
  );

  const [description, setDescription] = useState(
    editTask ? editTask.description : ""
  );

  const [status, setStatus] = useState(
    editTask ? editTask.status : "To Do"
  );

  const [priority, setPriority] = useState(
    editTask ? editTask.priority : "Medium"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter task title");
      return;
    }

    const task = {
      id: editTask ? editTask.id : Date.now(),
      title,
      description,
      status,
      priority,
      date: new Date().toLocaleDateString(),
    };

    addTask(task);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            {editTask ? "Edit Task" : "Add New Task"}
          </h2>

          <button
            onClick={closeModal}
            className="text-gray-500 text-2xl"
          >
            ×
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <div className="mb-4">

            <label className="block font-medium mb-2">
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />

          </div>

          {/* Description */}
          <div className="mb-4">

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              rows="4"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />

          </div>

          {/* Status */}
          <div className="mb-4">

            <label className="block font-medium mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Finished</option>
              <option>Cancelled</option>
            </select>

          </div>

          {/* Priority */}
          <div className="mb-6">

            <label className="block font-medium mb-2">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

          </div>

          {/* Buttons */}
          <div className="flex gap-3">

            <button
              type="button"
              onClick={closeModal}
              className="w-1/2 border rounded-xl py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 bg-purple-700 text-white rounded-xl py-3"
            >
              {editTask ? "Update Task" : "Add Task"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddTaskModal;