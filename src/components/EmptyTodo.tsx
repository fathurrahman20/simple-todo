const EmptyTodo = () => {
  return (
    <>
      <div> </div>
      <main className="grid min-h-full px-6 py-24 mx-auto bg-white place-items-center sm:py-32 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
            No todos yet.
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
            Let's get started by creating your first task!
          </p>
        </div>
      </main>
    </>
  );
};

export default EmptyTodo;
