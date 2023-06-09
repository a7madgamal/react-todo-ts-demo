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
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          value={newTaskName}
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary btn-sm col-3">
        <react_fontawesome_1.FontAwesomeIcon
          icon={free_solid_svg_icons_1.faPlus}
        />{" "}
        Save task
      </button>
    </form>
  );
};
exports.TaskCreator = TaskCreator;
