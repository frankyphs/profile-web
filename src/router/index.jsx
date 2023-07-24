import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Education from "../components/background";
import Job from "../components/job";
import IT from "../components/IT";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/ITJourney",
        element: <IT />,
      },
    ],
  },
]);

export default router;
