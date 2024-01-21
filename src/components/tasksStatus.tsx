interface TasksStatusProps {
  noOfCompletedTasks: number;
  noOfCreatedTasks: number;
}

const TasksStatus: React.FC<TasksStatusProps> = ({
  noOfCompletedTasks,
  noOfCreatedTasks,
}) => {
  return (
    <div className="flex justify-between mb-6">
      <h2 className="text-sm font-bold">
        Pomos:{" "}
        <span className="px-1 text-blue-500">
          {noOfCompletedTasks}/{noOfCreatedTasks}
        </span>
      </h2>
      <h2 className="text-sm font-bold">
        Finish At: <span className=" px-1 text-blue-500">09:31 (3h)</span>
      </h2>
    </div>
  );
};
export default TasksStatus;
