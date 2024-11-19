import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "@/context/TodoContext";
import { FormSchema } from "@/schema/FormSchema";
import TodoForm from "./TodoForm";
import TodoFormHeader from "./TodoFormHeader";
import TodoButton from "./TodoButton";

interface AddEditTodo {
  initialData?: {
    id: number;
    title: string;
    description: string;
    status: "todo" | "progress" | "review" | "done";
  };
  onSubmit: (data: Todo, id?: number) => void;
}

const AddEditTodo = ({ initialData, onSubmit }: AddEditTodo) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "Title",
      description: "",
      status: "todo",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("title", initialData.title);
      form.setValue("description", initialData.description);
      form.setValue("status", initialData.status);
    }
  }, [initialData, form]);

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    const { title, status, description } = data;

    const todoData = {
      id: initialData?.id || Math.random(),
      title: title,
      description: description,
      status: status as "todo" | "progress" | "review" | "done",
    };

    initialData ? onSubmit(todoData, initialData?.id) : onSubmit(todoData);
    setSubmit(true);
    form.reset();
  }

  return (
    <Dialog modal={isModal}>
      <TodoButton initialData={initialData} handleSubmit={setSubmit} />
      <DialogContent className={`sm:max-w-[425px] ${isSubmit ? "hidden" : ""}`}>
        <TodoFormHeader initialData={initialData} />
        <TodoForm
          form={form}
          initialData={initialData}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditTodo;
