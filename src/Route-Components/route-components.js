import { Route, Routes } from "react-router-dom";
import * as useComponent from "../index";

export function RouteComponents() {
  return (
    <Routes>
      <Route path="/" element={<useComponent.Avator />} />

      <Route path="/alert" element={<useComponent.Alert />} />

      <Route path="/badges" element={<useComponent.Badges />} />

      <Route path="/button" element={<useComponent.Button />} />

      <Route path="/card" element={<useComponent.Card />} />

      <Route path="/toasts" element={<useComponent.Toast />} />

      <Route path="/images" element={<useComponent.Image />} />

      <Route path="/input" element={<useComponent.Input />} />

      <Route path="/list" element={<useComponent.List />} />

      <Route path="/navigation" element={<useComponent.Navigation />} />

      <Route path="/modal" element={<useComponent.Modal />} />

      <Route path="/rating" element={<useComponent.Rating />} />
    </Routes>
  );
}
