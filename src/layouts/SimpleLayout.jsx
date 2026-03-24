// src/layouts/SimpleLayout.jsx
import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}