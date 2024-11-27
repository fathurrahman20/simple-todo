import Card from "@/components/Card";
import EmptySearchTodo from "@/components/EmptySearchTodo";
import EmptyTodo from "@/components/EmptyTodo";
import { useTodos } from "@/context/TodoContext";
import usePage from "@/hooks/usePage";
import useTitlePage from "@/hooks/useTitlePage";
import Layout from "@/layout/Layout";

const TodoPage = () => {
  useTitlePage("Todo");
  const { inputSearch } = useTodos();
  const filteredTodos = usePage("todo");

  return (
    <>
      <Layout>
        <div className="flex flex-wrap justify-center gap-4 mb-5 lg:ml-80 xl:max-w-7xl 2xl:max-w-full card-container lg:justify-start mt-7">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => <Card key={todo.id} todo={todo} />)
          ) : inputSearch.length > 0 ? (
            <EmptySearchTodo />
          ) : (
            <EmptyTodo page="todo" />
          )}
        </div>
      </Layout>
    </>
  );
};

export default TodoPage;
