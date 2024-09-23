import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import App from "./App"
import Editor from "./components/Editor"
import Root from "./Root";
import Dashboard from "./components/DashBoard";
import AuthLayout from "./components/Auth/AuthLayout";
import Login from "./components/Auth/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "editor/:id",
                element: <Editor />,
            }
        ]
    }
]);

export default routes