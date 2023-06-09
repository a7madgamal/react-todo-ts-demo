var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskRow = void 0;
const react_1 = __importDefault(require("react"));
const TaskRow = ({task, toggleTask}) => {
  return react_1.default.createElement(
    "tr",
    null,
    react_1.default.createElement(
      "td",
      {className: "d-flex justify-content-between"},
      task.name,
      react_1.default.createElement("input", {
        type: "checkbox",
        checked: task.done,
        onChange: () => {
          toggleTask(task);
        },
      })
    )
  );
};
exports.TaskRow = TaskRow;
