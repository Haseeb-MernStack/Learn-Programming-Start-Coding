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
  {
    id: 4,
    name: "MongoDB",
    image:
      "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    type: "DB",
  },
  {
    id: 5,
    name: "NeonDB",
    image:
      "https://imgs.search.brave.com/4O17WY1btmNRl63MWNmrPUbxOf-4nut9eU_461uSNXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uZW9u/LnRlY2gvYnJhbmQv/bmVvbi1sb2dvLWxp/Z2h0LWNvbG9yLnN2/Zw",
    type: "DB",
  },
  {
    id: 6,
    name: "Prisma",
    image: "https://cdn.worldvectorlogo.com/logos/prisma-4.svg",
    type: "DB",
  },
  {
    id: 7,
    name: "PostgreSQL",
    image:
      "https://imgs.search.brave.com/3bH1E-hD2lmNDiR_PE8xkzwh8JEfF4m9L79TGNxdbRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI5L1Bv/c3RncmVzcWxfZWxl/cGhhbnQuc3ZnLzY0/MHB4LVBvc3RncmVz/cWxfZWxlcGhhbnQu/c3ZnLnBuZw",
    type: "DB",
  },
  {
    id: 8,
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    type: "Backend",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    type: "Frontend",
  },
  {
    id: 10,
    name: "GitHub",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    type: "Tool",
  },
  {
    id: 11,
    name: "Git",
    image:
      "https://imgs.search.brave.com/APq7nMmzxFiAGHPfukG2NugbtLWpnAEAPdOglBHEApE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
    type: "Tool",
  },
  {
    id: 12,
    name: "Postman",
    image:
      "https://imgs.search.brave.com/DbTWivAi--ktY5uLj_UhNIP_GUWInzUCzU1e8pi3xT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWI1MTE1MGQ1/ZGU5YTNkYWQ1Zjgu/cG5n",
    type: "Tool",
  },
  {
    id: 13,
    name: "Next.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    type: "Both",
  },
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
