import Card from "@/components/Card";
import EmptyTodo from "@/components/EmptyTodo";
import { useTodos } from "@/context/TodoContext";
import Layout from "@/layout/Layout";

const Home = () => {
  const { todos } = useTodos();

  return (
    <>
      <Layout>
        {/* Card */}
        <div className="flex flex-wrap justify-center gap-4 lg:ml-80 xl:max-w-7xl 2xl:max-w-full card-container lg:justify-start mt-7">
          {todos.length !== 0 ? (
            todos.map((todo) => <Card key={todo.id} todo={todo} />)
          ) : (
            <EmptyTodo page="home" />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
