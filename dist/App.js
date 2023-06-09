Object.defineProperty(exports, "__esModule", {value: true});
require("./App.css");
const TaskCreator_1 = require("./components/TaskCreator");
const react_1 = require("react");
const TaskTable_1 = require("./components/TaskTable");
const VisibilityControl_1 = require("./components/VisibilityControl");
const Container_1 = require("./components/Container");
function App() {
  const [tasksItems, setTaskItems] = (0, react_1.useState)([]);
  const [showCompleted, setShowCompleted] = (0, react_1.useState)(false);
  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, {name: taskName, done: false}]);
    } else {
      alert("The task already exist");
    }
  }
  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name
          ? Object.assign(Object.assign({}, t), {done: !t.done})
          : t
      )
    );
  };
  (0, react_1.useEffect)(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);
  const cleanTasks = () => {
    setTaskItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };
  (0, react_1.useEffect)(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);
  return (
    <main className="bg-dark vh-100 text-white">
      <Container_1.Container>
        <TaskCreator_1.TaskCreator createTask={createTask} />
        <TaskTable_1.TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl_1.VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
          isChecked={showCompleted}
        />

        {showCompleted === true && (
          <TaskTable_1.TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container_1.Container>
    </main>
  );
}
exports.default = App;
