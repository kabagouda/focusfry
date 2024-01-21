import { create } from "zustand";

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (editedTask: Partial<Task> & { id: string }) => void;
  removeTask: (id: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks:
    typeof localStorage !== "undefined" && localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks") as string)
      : [],
  addTask: (task: Task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
    localStorage.setItem(
      "tasks",
      JSON.stringify([...useTaskStore.getState().tasks, task])
    );
  },
  editTask: (editedTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === editedTask.id ? { ...task, ...editedTask } : task
      ),
    }));
    localStorage.setItem(
      "tasks",
      JSON.stringify(useTaskStore.getState().tasks)
    );
  },
  removeTask: (id: string) => {
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    localStorage.setItem(
      "tasks",
      JSON.stringify(useTaskStore.getState().tasks)
    );
  },
}));
