import AddTodo from "@/components/AddEditTodo";
import Sidebar from "@/components/Sidebar";
import { Todo, useTodos } from "@/context/TodoContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { addTodo } = useTodos();

  function handleAddTodo(data: Todo) {
    addTodo(data);
  }

  return (
    <>
      <Sidebar />
      {/* Add Todo Button */}
      <div className="flex justify-end -mt-12 mr-8">
        <AddTodo onSubmit={handleAddTodo} />
      </div>
      {children}
    </>
  );
};

export default Layout;
