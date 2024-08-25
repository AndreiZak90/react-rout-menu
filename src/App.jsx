import { RouterProvider } from "react-router-dom";

import Menu from "./Components/Menu";
import { router } from "./Router";

export default function App() {
  return (
    <div>
      <Menu />
      <RouterProvider router={router} />
      <div className="page"></div>
    </div>
  );
}
