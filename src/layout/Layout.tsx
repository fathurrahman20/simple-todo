import AddTodo from "@/components/ModalAddEditTodo";
import { ModeToggle } from "@/components/mode-toggle";
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
      <div className="flex justify-end mr-8 -mt-14">
        <ModeToggle />
      </div>

      {/* Add Todo Button */}
      <div className="flex justify-end mt-4 mr-8">
        <AddTodo onSubmit={handleAddTodo} />
      </div>
      {children}
    </>
  );
};

export default Layout;
