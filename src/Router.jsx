import HomePage from "./Components/HomePage";
import DriftPage from "./Components/DriftPage";
import TimeAttackPage from "./Components/TimeAttackPage";
import ForzaPage from "./Components/ForzaPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/drift",
    element: <DriftPage />,
  },
  {
    path: "/timeattack",
    element: <TimeAttackPage />,
  },
  {
    path: "/forza",
    element: <ForzaPage />,
  },
]);
