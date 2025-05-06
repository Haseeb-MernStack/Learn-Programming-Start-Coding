import React from "react";
import { useParams } from "react-router-dom";

const languages = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    type: "Frontend",
  },
  {
    id: 2,
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    type: "Backend",
  },
  {
    id: 3,
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    type: "Frontend",
  },
  // ...rest of the data
];

const badgeColors = {
  Frontend: "bg-blue-100 text-blue-800",
  Backend: "bg-green-100 text-green-800",
  Both: "bg-purple-100 text-purple-800",
  DB: "bg-yellow-100 text-yellow-800",
  Tool: "bg-gray-100 text-gray-800",
};

const LanguageDetails = () => {
  const { id } = useParams();
  const lang = languages.find((item) => item.id === parseInt(id));

  if (!lang) return <div className="p-6">Language not found.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-xl w-full border rounded-xl shadow-xl p-8 text-center">
        <img
          src={lang.image}
          alt={lang.name}
          className="w-32 h-32 object-contain mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-3">{lang.name}</h1>
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            badgeColors[lang.type]
          }`}
        >
          {lang.type}
        </div>
      </div>
    </div>
  );
};

export default LanguageDetails;
