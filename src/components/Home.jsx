import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
        Exploring the World of Web
      </h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-600">
        Bringing your ideas to life
      </p>
      <button className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-lg animate-bounce hover:bg-purple-800">
        Discover My Work
      </button>
    </section>
  );
};

export default Home;
