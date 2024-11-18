import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/HomePage";
import ErrorPage from "@/pages/ErrorPage";
import TodoPage from "@/pages/TodoPage";
import ProgressPage from "@/pages/ProgressPage";
import DonePage from "@/pages/DonePage";
import ReviewPage from "@/pages/ReviewPage";

const routerList = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "todo",
      element: <TodoPage />,
    },
    {
      path: "in-progress",
      element: <ProgressPage />,
    },
    {
      path: "review",
      element: <ReviewPage />,
    },
    {
      path: "done",
      element: <DonePage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default routerList;
