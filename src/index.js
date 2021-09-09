import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

export { Avator } from "./components/avator";
export { Modal } from "./components/modal";
export { Alert } from "./components/alert";
export { Toast } from "./components/toast";
export { Rating } from "./components/rating";
export { Card } from "./components/card";

export { Button } from "./components/Button";
export { Badges } from "./components/badges";
export { Image } from "./components/img";
export { Input } from "./components/input";
export { List } from "./components/list";
export { Navigation } from "./components/navigation";

export { RouteComponents } from "./Route-Components/route-components";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
