Object.defineProperty(exports, "__esModule", {value: true});
exports.VisibilityControl = void 0;
const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };
  return React.createElement(
    "div",
    {
      className:
        "d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary",
    },
    React.createElement(
      "div",
      {className: "form-check form-switch"},
      React.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        checked: isChecked,
        onChange: (e) => setShowCompleted(e.target.checked),
      }),
      "",
      React.createElement("label", null, "Show tasks done")
    ),
    React.createElement(
      "button",
      {onClick: handleDelete, className: "btn btn-danger btn-sm"},
      "Clear"
    )
  );
};
exports.VisibilityControl = VisibilityControl;
