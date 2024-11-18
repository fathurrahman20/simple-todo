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
export type PageKey = keyof Messages;
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

export default messages;
