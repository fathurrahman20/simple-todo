import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Todo } from "@/context/TodoContext";
import { PencilIcon } from "@heroicons/react/24/outline";

const FormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(50),
  description: z
    .string()
    .min(10, { message: "Must be 10 or more characters long" })
    .max(200),
  status: z.string({
    required_error: "Please select an status to display.",
  }),
});

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
      <DialogTrigger asChild>
        <Button
          variant={initialData && "secondary"}
          onClick={() => setSubmit(false)}>
          {initialData ? (
            <PencilIcon aria-hidden="true" className="-ml-0.5 size-5" />
          ) : (
            <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
          )}
          {initialData ? "Edit Todo" : "Add Todo"}
        </Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[425px] ${isSubmit ? "hidden" : ""}`}>
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Data" : "Add Todo"}</DialogTitle>
          <DialogDescription>
            {initialData
              ? "Edit Data"
              : "Add Todo." + " Click save when you're done."}
          </DialogDescription>
        </DialogHeader>

        {/* End: Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={initialData?.title || "Todo Title"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your Todo Title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        initialData?.description || "Todo Description"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your Todo Description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="progress">In Progress</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditTodo;
