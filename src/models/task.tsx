interface Task {
  id: string;
  title: string;
  description: string;
  pomodoros: number;
  isCompleted?: boolean;
  isSelected?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  completedAt?: Date;
  isDeleted?: boolean;
}
