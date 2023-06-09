var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
exports.VisibilityControl = void 0;
const react_1 = __importDefault(require("react"));
const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };
  return react_1.default.createElement(
    "div",
    {
      className:
        "d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary",
    },
    react_1.default.createElement(
      "div",
      {className: "form-check form-switch"},
      react_1.default.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        checked: isChecked,
        onChange: (e) => setShowCompleted(e.target.checked),
      }),
      "",
      react_1.default.createElement("label", null, "Show tasks done")
    ),
    react_1.default.createElement(
      "button",
      {onClick: handleDelete, className: "btn btn-danger btn-sm"},
      "Clear"
    )
  );
};
exports.VisibilityControl = VisibilityControl;
