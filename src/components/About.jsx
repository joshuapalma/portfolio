import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-16 bg-white">
      <img
        src="src/assets/images/joshua-palma-img.png"
        alt="Profile"
        className="bg-contain w-auto h-auto mb-6 md:mb-0"
      />
      <div className="md:ml-8 text-center md:text-left">
        <p className="text-md text-gray-500">About Me</p>
        <h2 className="text-5xl font-semibold">Discover My Expertise</h2>
        <p className="mt-4 text-gray-600">
          I am a passionate and results-driven web developer with nearly 3 years
          of experience specializing in building robust and scalable web
          applications using the Laravel framework. My expertise lies in
          developing backend systems, crafting clean and efficient code, and
          delivering intuitive user experiences. I have a strong foundation in
          RESTful APIs, database design, and modern web technologies, which I
          leverage to create seamless integrations and solutions.
        </p>
        <p className="mt-4 text-gray-600">
          With a focus on continuous learning, I stay up-to-date with the latest
          advancements in Laravel, PHP, and web development practices. I am
          committed to solving complex problems and improving system performance
          while ensuring best coding practices. Whether it’s developing new
          features or optimizing existing applications, I thrive on turning
          ideas into reality through code.
        </p>
      </div>
    </section>
  );
};

export default About;
