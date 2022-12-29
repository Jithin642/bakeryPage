import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout/Checkout";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
