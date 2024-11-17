import { createContext, useState, useContext, ReactNode } from "react";

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: "todo" | "progress" | "review" | "done";
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (todo: Todo, id?: number) => void;
  filterTodo: (status: "todo" | "progress" | "review" | "done") => void;
}

const dummy: Todo[] = [
  {
    id: 1,
    title: "Setup Project",
    description:
      "Initialize the project with necessary configurations and dependencies.",
    status: "todo",
  },
  {
    id: 2,
    title: "Design Homepage",
    description: "Create a wireframe and visual design for the homepage.",
    status: "progress",
  },
  {
    id: 3,
    title: "Implement Authentication",
    description: "Develop user login and registration functionalities.",
    status: "review",
  },
  {
    id: 4,
    title: "Deploy to Production",
    description: "Deploy the application to the production environment.",
    status: "done",
  },
];

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  let data: Todo[] = [];
  try {
    const rawData = localStorage.getItem("todos");
    data = rawData ? JSON.parse(rawData) : [];
  } catch (error) {
    console.error("Failed to parse todos from localStorage:", error);
  }
  const [todos, setTodos] = useState<Todo[]>(data.length !== 0 ? data : dummy);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (todo: Todo, id?: number) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === id ? todo : t)));
  };

  const filterTodo = (
    status: "todo" | "progress" | "review" | "done"
  ): Todo[] => {
    const data = todos.filter((todo) => {
      return todo.status === status;
    });
    return data;
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, filterTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
