Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const App_1 = require("./App");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<App_1.default />);
