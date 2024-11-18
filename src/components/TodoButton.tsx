import { Button } from "./ui/button";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";

interface Props {
  initialData?: {
    id: number;
    title: string;
    description: string;
    status: "todo" | "progress" | "review" | "done";
  };
  handleSubmit: (isSubmit: boolean) => void;
}
const TodoButton = ({ initialData, handleSubmit }: Props) => {
  return (
    <Button
      variant={initialData && "secondary"}
      onClick={() => handleSubmit(false)}>
      {initialData ? (
        <PencilIcon aria-hidden="true" className="-ml-0.5 size-5" />
      ) : (
        <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
      )}
      {initialData ? "Edit Todo" : "Add Todo"}
    </Button>
  );
};

export default TodoButton;
