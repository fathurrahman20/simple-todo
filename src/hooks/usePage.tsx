import { Todo, useTodos } from "@/context/TodoContext";
import { useEffect, useState } from "react";

const usePage = (page?: string) => {
  const [search, setSearch] = useState<string | null>(null);
  const [dataSearch, setDataSearch] = useState<Todo[]>([]);
  const { todos, inputSearch } = useTodos();
  const data = todos.filter((todo) => todo.status === page);
  const dataPage = page ? data : todos;
  const filteredTodos = search ? dataSearch : dataPage;

  useEffect(() => {
    setSearch(inputSearch);
    const filteredTodos = dataPage.filter((todo) => {
      return (
        todo.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
        todo.description.toLowerCase().includes(inputSearch.toLowerCase())
      );
    });

    setDataSearch(filteredTodos);
  }, [inputSearch, todos]);

  return filteredTodos;
};

export default usePage;
