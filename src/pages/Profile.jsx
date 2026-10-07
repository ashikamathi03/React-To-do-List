import React from "react";

function Profile() {

  return (

    <div className="p-8">

      <div className="bg-white rounded-3xl p-8">

      

        <div className="flex items-center gap-6">

          <img
            src="https://cdn.vectorstock.com/i/1000v/79/38/little-girl-profile-avatar-isolated-cute-female-vector-21387938.jpg"
            alt="Ashika Mathi"
            className="w-32 h-32 rounded-full border-4 border-purple-200 object-cover"
          />

          <div>

            <h1 className="text-3xl font-bold">
              Ashika Mathi
            </h1>

            <p className="text-purple-700 mt-2">
              Computer Science Engineer
            </p>

            <p className="text-gray-500 mt-1">
              Java Developer | Software Engineer
            </p>

          </div>

        </div>


       
        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="bg-gray-50 p-5 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p className="font-semibold mt-1">
              ashikamathi03@gmail.com
            </p>

          </div>


          <div className="bg-gray-50 p-5 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Location
            </p>

            <p className="font-semibold mt-1">
              Chennai, India
            </p>

          </div>


          <div className="bg-gray-50 p-5 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Education
            </p>

            <p className="font-semibold mt-1">
              B.E Computer Science & Engineering
            </p>

          </div>


          <div className="bg-gray-50 p-5 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Role
            </p>

            <p className="font-semibold mt-1">
              Software Engineer
            </p>

          </div>

        </div>


        

        <div className="mt-10">

          <h2 className="text-xl font-bold">
            About Me
          </h2>

          <p className="text-gray-600 mt-3 leading-7">
            I am a Computer Science Engineering graduate interested
            in software development and Java development. I enjoy
            building applications and learning new technologies.
          </p>

        </div>
         <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              Java
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              SQL
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              HTML
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              CSS
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              React
            </span>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Profile;