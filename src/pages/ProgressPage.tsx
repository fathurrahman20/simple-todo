import Card from "@/components/Card";
import EmptyTodo from "@/components/EmptyTodo";
import { Todo, useTodos } from "@/context/TodoContext";
import Layout from "@/layout/Layout";
import { useEffect, useState } from "react";

const ProgressPage = () => {
  const { todos, inputSearch } = useTodos();
  const data = todos.filter((todo) => todo.status === "progress");
  const [search, setSearch] = useState<string | null>(null);
  const [dataSearch, setDataSearch] = useState<Todo[]>([]);
  const filteredTodos = search ? dataSearch : data;

  useEffect(() => {
    setSearch(inputSearch);
    const filteredTodos = data.filter((todo) => {
      return (
        todo.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
        todo.description.toLowerCase().includes(inputSearch.toLowerCase())
      );
    });

    setDataSearch(filteredTodos);
  }, [inputSearch, todos]);

  return (
    <>
      <Layout>
        {/* Card */}
        <div className="flex flex-wrap justify-center gap-4 lg:ml-80 xl:max-w-7xl 2xl:max-w-full card-container lg:justify-start mt-7 mb-5">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => <Card key={todo.id} todo={todo} />)
          ) : (
            <EmptyTodo page="progress" />
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProgressPage;
