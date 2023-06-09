Object.defineProperty(exports, "__esModule", {value: true});
exports.Container = void 0;
const Container = ({children}) => {
  return React.createElement(
    "div",
    {className: "container p-4"},
    React.createElement("div", {className: "col-md-4 offset-md-4"}, children)
  );
};
exports.Container = Container;
