import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const contentMap = {
  mernstack: {
    title: "MERN Stack",
    color: "#10B981",
    overview:
      "The MERN stack combines MongoDB, Express.js, React, and Node.js to build dynamic full-stack web applications using JavaScript end-to-end.",
    learn: [
      "Build REST APIs using Express.js and Node.js",
      "Use MongoDB for database management",
      "Create frontend UIs with React.js",
      "Implement full-stack authentication and authorization",
    ],
    career:
      "MERN developers are in high demand for startups and enterprise web apps. Knowledge of this stack can land you roles like Full-Stack Developer or Frontend Developer.",
    resources: [
      "https://www.mongodb.com/mern-stack",
      "https://reactjs.org",
      "https://expressjs.com",
      "https://nodejs.org",
    ],
  },
  devops: {
    title: "DevOps",
    color: "#3B82F6",
    overview:
      "DevOps is a set of practices that combines software development and IT operations to shorten the development lifecycle and provide continuous delivery.",
    learn: [
      "CI/CD pipelines using GitHub Actions or Jenkins",
      "Infrastructure as Code (Terraform, Ansible)",
      "Monitoring with Prometheus and Grafana",
      "Containerization with Docker and Kubernetes",
    ],
    career:
      "DevOps engineers bridge the gap between development and operations, making them vital for scalable software delivery. High demand in cloud-native roles.",
    resources: [
      "https://www.redhat.com/en/topics/devops",
      "https://aws.amazon.com/devops/",
      "https://roadmap.sh/devops",
    ],
  },
  testing: {
    title: "Testing",
    color: "#EC4899",
    overview:
      "Software testing ensures your code works as expected. It includes unit testing, integration testing, and end-to-end testing.",
    learn: [
      "Write unit tests using Jest and Mocha",
      "Perform integration testing with Supertest",
      "Use Cypress for end-to-end UI testing",
      "Test-driven development (TDD) practices",
    ],
    career:
      "Testing is critical for quality assurance and is a skill required in most frontend and backend roles. Specialized QA roles are also available.",
    resources: [
      "https://jestjs.io",
      "https://www.cypress.io",
      "https://testing-library.com",
    ],
  },
  tools: {
    title: "Developer Tools",
    color: "#F59E0B",
    overview:
      "Every developer relies on tools that enhance productivity, collaboration, and performance throughout the development lifecycle.",
    learn: [
      "Version control using Git and GitHub",
      "Working with Docker for containers",
      "Using VS Code like a pro",
      "Debugging and linting tools (ESLint, Prettier)",
    ],
    career:
      "Proficiency with development tools boosts your effectiveness in any role. These are fundamental skills for all developers.",
    resources: [
      "https://git-scm.com",
      "https://docs.docker.com",
      "https://code.visualstudio.com",
    ],
  },
  apis: {
    title: "APIs",
    color: "#8B5CF6",
    overview:
      "APIs allow different parts of an application — or even different systems — to communicate. REST and GraphQL are the most common types.",
    learn: [
      "Design RESTful APIs with Express.js",
      "Build GraphQL APIs using Apollo Server",
      "Use Postman to test APIs",
      "Authentication using JWT and OAuth",
    ],
    career:
      "API knowledge is essential for both frontend and backend developers. It's key for integration roles and third-party service communication.",
    resources: [
      "https://restfulapi.net",
      "https://graphql.org",
      "https://www.postman.com",
    ],
  },
  cloud: {
    title: "Cloud",
    color: "#06B6D4",
    overview:
      "Cloud platforms like AWS, Azure, and GCP allow applications to scale, deploy globally, and stay available 24/7.",
    learn: [
      "Deploy apps to AWS using EC2 or S3",
      "Use Firebase for hosting and databases",
      "Understand serverless functions and scaling",
      "Cost optimization and cloud security basics",
    ],
    career:
      "Cloud engineers and backend developers must know how to deploy and manage apps in the cloud. Valuable for freelancing and enterprise work.",
    resources: [
      "https://aws.amazon.com",
      "https://firebase.google.com",
      "https://cloud.google.com",
    ],
  },
  cicd: {
    title: "CI/CD",
    color: "#F43F5E",
    overview:
      "CI/CD automates the process of code integration and delivery, helping teams ship faster and with fewer bugs.",
    learn: [
      "Set up GitHub Actions workflows",
      "Use Jenkins for pipeline automation",
      "Deploy automatically to Vercel/Netlify",
      "Write unit tests for CI",
    ],
    career:
      "CI/CD is a vital DevOps practice. Engineers with automation skills are in demand to ensure smooth software delivery pipelines.",
    resources: [
      "https://docs.github.com/en/actions",
      "https://www.jenkins.io",
      "https://vercel.com/docs",
    ],
  },
  technologies: {
    title: "Technologies",
    color: "#6366F1",
    overview:
      "Tech is always evolving. Stay ahead by learning the most impactful tools, languages, and platforms used by modern developers.",
    learn: [
      "Understand JAMstack, Microservices, and Monorepos",
      "Explore TypeScript and Rust",
      "Use headless CMSs like Strapi",
      "Dive into AI APIs and automation tools",
    ],
    career:
      "Understanding new technologies gives you an edge in interviews and on teams that value innovation.",
    resources: [
      "https://2025.stateofjs.com",
      "https://jamstack.org",
      "https://strapi.io",
    ],
  },
};

const LearnPage = () => {
  const { tech } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = contentMap[tech?.toLowerCase()];

  if (!content) {
    return (
      <>
        <Navbar />
        <div className="p-20 text-center">
          <h1 className="text-3xl font-bold text-red-500">Content Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full px-30 py-10 bg-gray-50">
        <div className="">
          <h1
            className="text-5xl font-extrabold mb-6"
            style={{ color: content.color }}
          >
            {content.title}
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl text-gray-800 font-bold mb-2">Overview</h2>
            <p className="text-gray-600 font-medium text-lg">
              {content.overview}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">What You Will Learn</h2>
            <ul className="list-disc pl-6 text-gray-600 font-medium">
              {content.learn.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Career Use</h2>
            <p className="text-gray-600 font-medium">{content.career}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">Resources</h2>
            <ul className="list-disc pl-6 text-blue-600">
              {content.resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LearnPage;
