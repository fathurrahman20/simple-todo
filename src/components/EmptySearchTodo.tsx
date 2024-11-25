const EmptySearchTodo = () => {
  return (
    <>
      <main
        className="grid min-h-full px-6 py-24 mx-auto bg-white divide-gray-200 
  dark:bg-[#09090B] place-items-center sm:py-32 lg:px-8 -mt-6">
        <div className="mx-auto text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-balance sm:text-7xl capitalize">
            No Matches Found
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 dark:text-white/70 text-pretty sm:text-xl/8 ">
            No tasks match your search. Maybe it's time to create a new one?
          </p>
        </div>
      </main>
    </>
  );
};

export default EmptySearchTodo;
