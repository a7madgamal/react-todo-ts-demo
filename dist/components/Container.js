var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const Container = ({children}) => {
  return react_1.default.createElement(
    "div",
    {className: "container p-4"},
    react_1.default.createElement(
      "div",
      {className: "col-md-4 offset-md-4"},
      children
    )
  );
};
exports.Container = Container;
