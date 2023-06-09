Object.defineProperty(exports, "__esModule", {value: true});
exports.Container = void 0;
const Container = ({children}) => {
  return (
    <div className="container p-4">
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  );
};
exports.Container = Container;
