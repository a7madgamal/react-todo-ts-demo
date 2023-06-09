Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskTable = void 0;
const TaskRow_1 = require("./TaskRow");
const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) =>
        React.createElement(TaskRow_1.TaskRow, {
          task: task,
          key: task.name,
          toggleTask: toggleTask,
        })
      );
  };
  return React.createElement(
    "table",
    {
      className:
        "table table-dark table-striped table-bordered border-secondary",
    },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        {className: "table-primary"},
        React.createElement("th", null, "Tasks")
      )
    ),
    React.createElement("tbody", null, taskTableRows(showCompleted))
  );
};
exports.TaskTable = TaskTable;
