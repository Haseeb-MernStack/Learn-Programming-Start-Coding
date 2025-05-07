import React from "react";
import { useParams } from "react-router-dom";

const languages = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    type: "Frontend",
    description:
      "JavaScript is a high-level, interpreted programming language that allows you to implement complex features on web pages. It’s widely used for client-side scripting.",
  },
  {
    id: 2,
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    type: "Backend",
    description:
      "Node.js is a runtime environment that lets developers use JavaScript to write server-side code. It's known for its speed and scalability.",
  },
  {
    id: 3,
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    type: "Frontend",
    description:
      "React is a JavaScript library developed by Facebook for building interactive user interfaces and single-page applications.",
  },
  {
    id: 4,
    name: "MongoDB",
    image:
      "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    type: "DB",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is highly scalable and used in modern web applications.",
  },
  {
    id: 5,
    name: "NeonDB",
    image:
      "https://imgs.search.brave.com/4O17WY1btmNRl63MWNmrPUbxOf-4nut9eU_461uSNXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uZW9u/LnRlY2gvYnJhbmQv/bmVvbi1sb2dvLWxp/Z2h0LWNvbG9yLnN2/Zw",
    type: "DB",
    description:
      "Neon is a cloud-native PostgreSQL platform offering auto-scaling, branching, and modern developer experience for managing relational data.",
  },
  {
    id: 6,
    name: "Prisma",
    image: "https://cdn.worldvectorlogo.com/logos/prisma-4.svg",
    type: "DB",
    description:
      "Prisma is a modern ORM (Object Relational Mapper) for Node.js and TypeScript that makes database access easy with auto-generated and type-safe queries.",
  },
  {
    id: 7,
    name: "PostgreSQL",
    image:
      "https://imgs.search.brave.com/3bH1E-hD2lmNDiR_PE8xkzwh8JEfF4m9L79TGNxdbRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI5L1Bv/c3RncmVzcWxfZWxl/cGhhbnQuc3ZnLzY0/MHB4LVBvc3RncmVz/cWxfZWxlcGhhbnQu/c3ZnLnBuZw",
    type: "DB",
    description:
      "PostgreSQL is an open-source, powerful relational database system with strong support for complex queries and reliability.",
  },
  {
    id: 8,
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    type: "Backend",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    type: "Frontend",
    description:
      "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design.",
  },
  {
    id: 10,
    name: "GitHub",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    type: "Tool",
    description:
      "GitHub is a platform for hosting and collaborating on Git repositories. It offers tools for version control, code reviews, and issue tracking.",
  },
  {
    id: 11,
    name: "Git",
    image:
      "https://imgs.search.brave.com/APq7nMmzxFiAGHPfukG2NugbtLWpnAEAPdOglBHEApE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
    type: "Tool",
    description:
      "Git is a distributed version control system that lets developers track changes in source code and coordinate work on projects collaboratively.",
  },
  {
    id: 12,
    name: "Postman",
    image:
      "https://imgs.search.brave.com/DbTWivAi--ktY5uLj_UhNIP_GUWInzUCzU1e8pi3xT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWI1MTE1MGQ1/ZGU5YTNkYWQ1Zjgu/cG5n",
    type: "Tool",
    description:
      "Postman is an API platform for building and testing APIs. It simplifies every step of building an API and streamlines collaboration.",
  },
  {
    id: 13,
    name: "Next.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    type: "Both",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations for building web applications.",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={lang.image}
            alt={lang.name}
            className="w-40 h-40 object-contain"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
              {lang.name}
            </h1>
            <span
              className={`inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium ${
                badgeColors[lang.type]
              }`}
            >
              {lang.type}
            </span>
            <p className="text-gray-600 text-lg leading-relaxed">
              {lang.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetails;
