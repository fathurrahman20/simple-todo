import { DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface Props {
  initialData?: {
    id: number;
    title: string;
    description: string;
    status: "todo" | "progress" | "review" | "done";
  };
}
const TodoFormHeader = ({ initialData }: Props) => {
  return (
    <DialogHeader>
      <DialogTitle>{initialData ? "Edit Todo" : "Add Todo"}</DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Todo. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
  );
};

export default TodoFormHeader;
