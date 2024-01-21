"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { CheckCircleIcon, MoreVerticalIcon } from "lucide-react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useTaskStore } from "@/store/store";
import { use, useState } from "react";
import { useToggle } from "usehooks-ts";

// const markAsCompleted = (id: string) => {
//   //find task based on id and edit it
//   useTaskStore.getState().tasks.

// }

const TaskTile: React.FC<Task> = ({
  id,
  title,
  description,
  pomodoros,
  isCompleted,
  isSelected,
}) => {
  const removeTask = useTaskStore((state) => state.removeTask);
  const editTask = useTaskStore((state) => state.editTask);
  const [selected, setSelected] = useState(isSelected);
  const markAsCompleted = (id: string) => {
    editTask({
      id,
      isCompleted: !isCompleted,
    });
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger className=" p-3 ">
        <div className={"bg-[#262626] p-3 rounded-lg"}>
          {/* {selected && <div className="w-2 h-10 bg-red-500"></div>} */}
          <div className="flex justify-between items-center mb-1">
            {/* <Checkbox
              checked={selected === true}
              onClick={() => setSelected(!selected)}
              id={id}
            /> */}

            <label
              className={`flex-1 ml-4 text-sm ${
                isCompleted ? "line-through text-gray-400" : ""
              }`}
              htmlFor={id}
            >
              {title + `${isCompleted ? " (Completed)" : ""}`}
            </label>

            <div className="flex items-center space-x-2">
              <p className="text-xs text-gray-400">Pomodoros: {pomodoros}</p>

              <Button
                className="bg-transparent p-1"
                onClick={() => markAsCompleted(id)}
              >
                <CheckCircleIcon
                  className={isCompleted ? "text-green-500" : "text-gray-400"}
                />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>Edit</ContextMenuItem>
        <ContextMenuItem inset onClick={() => markAsCompleted(id)}>
          Mark Completed
        </ContextMenuItem>
        <ContextMenuItem inset onClick={() => removeTask(id)}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
export default TaskTile;
