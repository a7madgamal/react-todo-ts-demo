import React, {FC} from "react";
import {Task, TaskRow} from "./TaskRow";

type TaskTableProps = {
  tasks: Task[];
  toggleTask: (newTask: Task) => void;
  showCompleted?: boolean;
};

export const TaskTable: FC<TaskTableProps> = ({
  tasks,
  toggleTask,
  showCompleted = false,
}) => {
  const taskTableRows = (doneValue: boolean) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
