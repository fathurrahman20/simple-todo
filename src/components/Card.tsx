import { Todo, useTodos } from "@/context/TodoContext";
import { DeleteTodo } from "./DeleteTodo";
import EditTodo from "./AddEditTodo";
import statusMap from "@/data/status";

interface Props {
  todo: Todo;
}

const Card = ({ todo }: Props) => {
  const { id, title, description, status } = todo;
  const { bg, text, fill, label } = statusMap[status];
  const { updateTodo } = useTodos();

  function handleEditTodo(data: Todo, id?: number) {
    updateTodo(data, id);
  }
  return (
    <div
      className="max-w-xs overflow-hidden rounded-lg shadow divide-y 
  bg-white text-gray-900 divide-gray-200 
  dark:bg-[#111827] dark:text-white dark:divide-[#374151]">
      <div className="px-4 py-5 sm:px-6">{title}</div>
      <div className="px-4 py-5 sm:p-6">
        <p className="mb-3">{description}</p>
        <span
          className={`inline-flex items-center gap-x-1.5 rounded-full ${bg} px-2 py-1 text-xs font-medium ${text}`}>
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className={`size-1.5 ${fill}`}>
            <circle r={3} cx={3} cy={3} />
          </svg>
          {label}
        </span>
      </div>
      <div className="flex flex-row justify-end px-4 py-4 sm:px-6 gap-x-3">
        <EditTodo initialData={todo} onSubmit={handleEditTodo} />
        <DeleteTodo id={id} />
      </div>
    </div>
  );
};

export default Card;
