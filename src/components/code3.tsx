"use client";
import Pomodoro from "./pomodoro";
import Header from "./header";
import TasksStatus from "./tasksStatus";
import CreateTask from "./createTask";
import TaskTile from "./taskTile";
import { useEffect, useRef, useState } from "react";
import { useTaskStore } from "@/store/store";
import { Button } from "./ui/button";

export default function Code3() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="bg-[#0D0D0D] min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <Pomodoro />
        <div className="w-full max-w-xl mx-auto bg-[#1A1A1A] rounded-lg p-6">
          <TasksStatus noOfCompletedTasks={1} noOfCreatedTasks={2} />
          <CreateTask />
          <div className="space-y-2">
            {tasks.length === 0 ? (
              <p>There are no tasks</p>
            ) : (
              tasks.map((task: Task) => {
                return <TaskTile key={task.id} {...task} />;
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
