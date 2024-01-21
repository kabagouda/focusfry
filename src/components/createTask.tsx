"use client";

import { BoldIcon, ImageIcon, ItalicIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useTaskStore } from "@/store/store";

export function CreateTask() {
  const addTask = useTaskStore((state) => state.addTask);
  // State for form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pomodoros, setPomodoros] = useState(1);
  const handleSubmit = () => {
    const task: Task = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      description,
      pomodoros,
      isCompleted: false,
      createdAt: new Date(),
      isSelected: false,
      updatedAt: new Date(),
    };
    addTask(task);
    // Clear form
    setTitle("");
    setDescription("");
    setPomodoros(1);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-end mb-6">
          <Button className="bg-blue-500 hover:bg-blue-600 flex items-center">
            <PlusIcon className="mr-2" />
            Create{"\n                      "}
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you{"\n ' "}re
            done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className=" items-center">
              <Label htmlFor="title"> Task Title </Label>
              <Input
                id="title"
                placeholder="Enter the title of your task"
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="relative group">
              <Label htmlFor="description"> Task Description </Label>
              <Textarea
                className="h-32 "
                placeholder="Enter the description of your task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="absolute right-2 bottom-2 flex space-x-2 text-blue-500">
                <BoldIcon className="w-5 h-5 group-hover:text-blue-700 cursor-pointer" />
                <ItalicIcon className="w-5 h-5 group-hover:text-blue-700 cursor-pointer" />
                <ImageIcon className="w-5 h-5 group-hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
            <div className="flex gap-4">
              <Label htmlFor="pomodoros">Pomodoros : </Label>
              <Input
                id="pomodoros"
                type="number"
                min={1}
                max={5}
                value={pomodoros}
                onChange={(e) => setPomodoros(parseInt(e.target.value))}
                placeholder="1"
                className="flex text-center"
              />
            </div>
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              Create
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CreateTask;
