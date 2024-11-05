import React from "react";

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl text-center font-semibold">Showcasing My Work</h2>
      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {/* Sample Project Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold">Project Title</h3>
          <p className="mt-2 text-gray-600">Description of the project...</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold">Project Title</h3>
          <p className="mt-2 text-gray-600">Description of the project...</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold">Project Title</h3>
          <p className="mt-2 text-gray-600">Description of the project...</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            View More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
          <h3 className="text-2xl font-semibold">Project Title</h3>
          <p className="mt-2 text-gray-600">Description of the project...</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            View More
          </button>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;
