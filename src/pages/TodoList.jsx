import React, { useEffect, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editTask, setEditTask] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

 

  useEffect(() => {

    const savedTasks = JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

    setTasks(savedTasks);

  }, []);

  

  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  

  const addTask = (task) => {

    if (editTask) {

      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item.id === task.id ? task : item
        )
      );

      setEditTask(null);

    } else {

      setTasks((previousTasks) => [
        ...previousTasks,
        task
      ]);

    }

  };

  

  const deleteTask = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );

  };

  

  const handleEdit = (task) => {

    setEditTask(task);

    setShowModal(true);

  };

 

  const closeModal = () => {

    setShowModal(false);

    setEditTask(null);

  };

  

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;

  });

  return (

    <div className="p-8">

     

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            To Do List
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your tasks and stay productive
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-700 text-white px-5 py-3 rounded-xl hover:bg-purple-800"
        >
          ➕ Add Task
        </button>

      </div>


     

      <div className="bg-white p-4 rounded-2xl mb-6 flex gap-4">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3 outline-none"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >

          <option>All</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Finished</option>
          <option>Cancelled</option>

        </select>

      </div>


     

      <div className="mb-5">

        <p className="text-gray-500">
          {filteredTasks.length} task(s)
        </p>

      </div>


      

      {filteredTasks.length === 0 ? (

        <div className="bg-white rounded-2xl p-12 text-center">

          <div className="text-5xl mb-4">
            📋
          </div>

          <h2 className="text-xl font-semibold">
            No tasks found
          </h2>

          <p className="text-gray-500 mt-2">
            Add a new task to get started.
          </p>

        </div>

      ) : (

        <div className="grid gap-4">

          {filteredTasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={handleEdit}
            />

          ))}

        </div>

      )}


     

      {showModal && (

        <AddTaskModal
          closeModal={closeModal}
          addTask={addTask}
          editTask={editTask}
        />

      )}

    </div>

  );
}

export default TodoList;