Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskTable = void 0;
const TaskRow_1 = require("./TaskRow");
const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow_1.TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
        />
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
exports.TaskTable = TaskTable;
