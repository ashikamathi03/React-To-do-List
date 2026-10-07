import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);

  }, []);

  const total = tasks.length;

  const todo = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const finished = tasks.filter(
    (task) => task.status === "Finished"
  ).length;

  return (

    <div className="p-8">

      {/* Welcome */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Welcome back, Ashika 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's what's happening with your tasks today.
        </p>

      </div>


      {/* Statistics */}

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl p-6">
          <p className="text-gray-500">
            Total Tasks
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {total}
          </h2>
        </div>


        <div className="bg-white rounded-2xl p-6">
          <p className="text-gray-500">
            To Do
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {todo}
          </h2>
        </div>


        <div className="bg-white rounded-2xl p-6">
          <p className="text-gray-500">
            In Progress
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress}
          </h2>
        </div>


        <div className="bg-white rounded-2xl p-6">
          <p className="text-gray-500">
            Finished
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {finished}
          </h2>
        </div>

      </div>


      {/* Add Task */}

      <div className="bg-purple-100 rounded-2xl p-8 mt-8">

        <h2 className="text-2xl font-bold">
          Ready to get things done?
        </h2>

        <p className="text-gray-600 mt-2">
          Create a task and start working on it.
        </p>

        <button
          onClick={() => navigate("/todo")}
          className="bg-purple-700 text-white px-5 py-3 rounded-xl mt-5"
        >
          ➕ Create Task
        </button>

      </div>


      {/* Recent Tasks */}

      <div className="mt-8">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Recent Tasks
          </h2>

          <button
            onClick={() => navigate("/todo")}
            className="text-purple-700"
          >
            View All
          </button>

        </div>

        <div className="space-y-3">

          {tasks.slice(-5).reverse().map((task) => (

            <div
              key={task.id}
              className="bg-white rounded-xl p-4 flex justify-between"
            >

              <div>
                <h3 className="font-semibold">
                  {task.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {task.description}
                </p>
              </div>

              <span className="text-sm">
                {task.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;