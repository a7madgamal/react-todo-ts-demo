var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const App_1 = __importDefault(require("./App"));
const el = document.getElementById("root");
if (!el) {
  throw new Error("Could not find root element");
}
const root = client_1.default.createRoot(el);
root.render(react_1.default.createElement(App_1.default, null));
