var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskTable = void 0;
const react_1 = __importDefault(require("react"));
const TaskRow_1 = require("./TaskRow");
const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) =>
        react_1.default.createElement(TaskRow_1.TaskRow, {
          task: task,
          key: task.name,
          toggleTask: toggleTask,
        })
      );
  };
  return react_1.default.createElement(
    "table",
    {
      className:
        "table table-dark table-striped table-bordered border-secondary",
    },
    react_1.default.createElement(
      "thead",
      null,
      react_1.default.createElement(
        "tr",
        {className: "table-primary"},
        react_1.default.createElement("th", null, "Tasks")
      )
    ),
    react_1.default.createElement("tbody", null, taskTableRows(showCompleted))
  );
};
exports.TaskTable = TaskTable;
