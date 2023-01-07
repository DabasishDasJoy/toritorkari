import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/publicRoutes/router";

function App() {
  return (
    <div className="font-san">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
