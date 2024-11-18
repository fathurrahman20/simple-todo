type Message = {
  title: string;
  description: string;
};
type Messages = {
  home: Message;
  todo: Message;
  progress: Message;
  review: Message;
  done: Message;
};
type PageKey = keyof Messages;
const messages: Messages = {
  home: {
    title: "No todos yet",
    description: "Let's get started by creating your first task!",
  },
  todo: {
    title: "No tasks to do",
    description: "Add a new task and start planning your day!",
  },
  progress: {
    title: "No tasks in progress",
    description: "Start working on your todos to see them here!",
  },
  review: {
    title: "No tasks under review",
    description: "Complete a task and move it here for review!",
  },
  done: {
    title: "No completed tasks yet",
    description: "Finish a task to celebrate your progress!",
  },
};

const EmptyTodo = ({ page }: { page: PageKey }) => {
  const message = messages[page];
  return (
    <>
      <div> </div>
      <main className="grid min-h-full px-6 py-24 mx-auto bg-white place-items-center sm:py-32 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
            {message.title}
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
            {message.description}
          </p>
        </div>
      </main>
    </>
  );
};

export default EmptyTodo;
