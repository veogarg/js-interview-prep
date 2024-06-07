import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./container/Layout/Root";
import ErrorPage from "./container/Layout/ErrorPage";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route
        path="/"
        element={<Navigate to="/traffic-signal" replace={true} />}
      />
      {routes.map((route) => {
        return (
          <Route path={route.path} element={route.component()} key={route.id} />
        );
      })}
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
