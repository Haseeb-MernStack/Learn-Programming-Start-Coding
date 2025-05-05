import React from "react";
import { useNavigate } from "react-router-dom";

const technologies = [
  "MernStack",
  "Technologies",
  "DevOps",
  "Tools",
  "APIs",
  "CI/CD",
  "Cloud",
  "Testing",
];

const Tech = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[600px] w-full flex flex-col px-4 md:px-20 py-12 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Master this.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <section
              key={index}
              onClick={() => {
                navigate(`/learn/${tech.toLowerCase()}`);
                window.scrollTo(0, 0);
              }}
              className="bg-gray-100 rounded-2xl cursor-pointer shadow-md p-6 text-center text-lg font-semibold hover:shadow-lg transition"
            >
              {tech}
            </section>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-300" />
    </>
  );
};

export default Tech;
