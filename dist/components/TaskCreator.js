Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskCreator = void 0;
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_1 = require("react");
const TaskCreator = ({createTask}) => {
  const [newTaskName, setNewTaskName] = (0, react_1.useState)();
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return React.createElement(
    "form",
    {onSubmit: handleSubmit, className: "my-2 row"},
    React.createElement(
      "div",
      {className: "col-9"},
      React.createElement("input", {
        type: "text",
        value: newTaskName,
        placeholder: "Enter a new task",
        onChange: (e) => setNewTaskName(e.target.value),
        className: "form-control",
      })
    ),
    React.createElement(
      "button",
      {className: "btn btn-primary btn-sm col-3"},
      React.createElement(react_fontawesome_1.FontAwesomeIcon, {
        icon: free_solid_svg_icons_1.faPlus,
      }),
      " Save task"
    )
  );
};
exports.TaskCreator = TaskCreator;
