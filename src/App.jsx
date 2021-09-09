import "./styles.css";
import { NavLink } from "react-router-dom";
import { RouteComponents } from "./Route-Components/route-components";

export default function App() {
  return (
    <div className="App">
      <header className="head">
        <h1 className="heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-earbuds"
            viewBox="0 0 16 16"
            style={{
              backgroundColor: "white",
              margin: "0rem 1rem",
              padding: ".6rem",
              borderRadius: "50%",
              position: "relative",
              top: ".5rem"
            }}
          >
            <path
              fill-rule="evenodd"
              d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"
            />
          </svg>
          Vinbo Library
        </h1>
      </header>
      <div className="display">
        <nav className="nav">
          <NavLink to="/">Avator</NavLink>

          <NavLink to="/modal">Modal</NavLink>

          <NavLink to="/toasts">Toasts</NavLink>

          <NavLink to="/rating">Rating</NavLink>

          <NavLink to="/card">Card</NavLink>

          <NavLink to="/navigation">Navigation</NavLink>

          <NavLink to="/alert">Alerts</NavLink>

          <NavLink to="/list">List</NavLink>

          <NavLink to="/input">Input </NavLink>

          <NavLink to="/images">Images </NavLink>

          <NavLink to="/button">Button</NavLink>

          <NavLink to="/badges">Badges</NavLink>
        </nav>
        <div className="components">
          <RouteComponents />
        </div>
      </div>
    </div>
  );
}
