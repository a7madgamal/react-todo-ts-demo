import React, {FC} from "react";

export type Task = {
  name: string;
  done: boolean;
};

type TaskRowProps = {
  task: Task;
  toggleTask: (newTask: Task) => void;
};

export const TaskRow: FC<TaskRowProps> = ({task, toggleTask}) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
          }}
        />
      </td>
    </tr>
  );
};
