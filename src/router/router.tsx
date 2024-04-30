import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "../components/form";
import Header from "../layout/header";
import FormEducation from "../components/formEducation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "/education",
        element: <FormEducation />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
