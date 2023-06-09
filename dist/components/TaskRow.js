Object.defineProperty(exports, "__esModule", {value: true});
exports.TaskRow = void 0;
const TaskRow = ({task, toggleTask}) => {
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
exports.TaskRow = TaskRow;
