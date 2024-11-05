import React from "react";

const Technologies = () => {
  const techs = [
    {
      name: "HTML5",
      image: "",
    },
    {
      name: "CSS3",
      image: "",
    },
    {
      name: "Javascript",
      image: "",
    },
    {
      name: "PHP",
      image: "",
    },
    {
      name: "Bootstrap 5",
      image: "",
    },
    {
      name: "TailwindCSS",
      image: "",
    },
    {
      name: "Laravel",
      image: "",
    },
    {
      name: "MySQL",
      image: "",
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <h2 className="text-3xl text-center font-semibold text-white">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center mt-8 text-white px-5">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-[12%] rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div className="flex flex-col items-center">
              <div className="min-h-[110px]">
                <img
                  src={tech.image}
                  className="w-28 h-w-28 rounded-full"
                  name={tech.name}
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-lg text-gray-800 font-bold">{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
