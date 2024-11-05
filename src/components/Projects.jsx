import React from "react";

const Projects = () => {
  const experts = [
    { name: "John Doe", role: "Web Developer", img: "/path/to/image.jpg" },
    { name: "John Doe", role: "Web Developer", img: "/path/to/image.jpg" },
    { name: "John Doe", role: "Web Developer", img: "/path/to/image.jpg" },
    { name: "John Doe", role: "Web Developer", img: "/path/to/image.jpg" },
    { name: "John Doe", role: "Web Developer", img: "/path/to/image.jpg" },
    // Other experts
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <h2 className="text-3xl text-center font-semibold">Our Experts</h2>
      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transform transition"
          >
            <img
              src={expert.img}
              alt={expert.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-2xl text-center">{expert.name}</h3>
            <p className="text-center mt-2">{expert.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
