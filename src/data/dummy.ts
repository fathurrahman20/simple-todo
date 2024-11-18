import { Todo } from "@/context/TodoContext";

export const dummy: Todo[] = [
  // Todo items
  {
    id: 1,
    title: "Setup Project",
    description:
      "Initialize the project with necessary configurations and dependencies.",
    status: "todo",
  },
  {
    id: 2,
    title: "Write README",
    description:
      "Create a README file to describe the project setup and usage.",
    status: "todo",
  },

  // Progress items
  {
    id: 3,
    title: "Design Homepage",
    description: "Create a wireframe and visual design for the homepage.",
    status: "progress",
  },
  {
    id: 4,
    title: "Create API Endpoints",
    description: "Develop necessary API endpoints for user management.",
    status: "progress",
  },

  // Review items
  {
    id: 5,
    title: "Implement Authentication",
    description: "Develop user login and registration functionalities.",
    status: "review",
  },
  {
    id: 6,
    title: "Optimize Database Queries",
    description: "Review and optimize database queries for better performance.",
    status: "review",
  },

  // Done items
  {
    id: 7,
    title: "Deploy to Production",
    description: "Deploy the application to the production environment.",
    status: "done",
  },
  {
    id: 8,
    title: "Set Up CI/CD Pipeline",
    description: "Implement continuous integration and deployment pipelines.",
    status: "done",
  },
];
