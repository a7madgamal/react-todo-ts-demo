var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", {enumerable: true, value: v});
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskCreator = void 0;
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_1 = __importStar(require("react"));
const TaskCreator = ({createTask}) => {
  const [newTaskName, setNewTaskName] = (0, react_1.useState)("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return react_1.default.createElement(
    "form",
    {onSubmit: handleSubmit, className: "my-2 row"},
    react_1.default.createElement(
      "div",
      {className: "col-9"},
      react_1.default.createElement("input", {
        type: "text",
        value: newTaskName,
        placeholder: "Enter a new task",
        onChange: (e) => setNewTaskName(e.target.value),
        className: "form-control",
      })
    ),
    react_1.default.createElement(
      "button",
      {className: "btn btn-primary btn-sm col-3"},
      react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
        icon: free_solid_svg_icons_1.faPlus,
      }),
      " Save task"
    )
  );
};
exports.TaskCreator = TaskCreator;
