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
import { Label } from "@/components/ui/label";

interface Items {
  id: number;
  todo: string;
}

const items: Items[] = [
  { id: 1, todo: "todo 1" },
  { id: 2, todo: "todo 2" },
  { id: 3, todo: "todo 3" },
];

const TodoList = () => {
  return (
    <>
      {/* Add Todo */}
      <div className="mx-auto flex justify-end max-w-2xl sm:px-6 lg:px-8 mt-3">
        <Dialog>
          <DialogTrigger asChild className="mx-end">
            <Button variant="outline">Add Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* List Todo */}
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-red mt-10">
        <ul role="list" className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden bg-white px-4 py-4 flex justify-between shadow sm:rounded-md sm:px-6 max-w-[500px] mx-auto">
              {item.todo}
              <div className="flex flex-row gap-2">
                <Button type="submit">Edit</Button>
                <Button type="submit">Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
